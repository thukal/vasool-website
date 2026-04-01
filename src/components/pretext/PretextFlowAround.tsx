import { useEffect, useRef, useState, useCallback } from "react";
import { prepareWithSegments, layoutNextLine, type LayoutCursor, type PreparedTextWithSegments } from "@chenglou/pretext";

interface FlowLine {
  text: string;
  width: number;
  x: number;
}

interface PretextFlowAroundProps {
  text: string;
  font?: string;
  lineHeight?: number;
  shapeSize?: number;
  shapeContent?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

/**
 * Text that flows around a moving shape using Pretext's layoutNextLine API.
 * The shape (e.g. a logo, icon, or emoji) moves vertically through the text,
 * and lines dynamically reflow to wrap around it — the signature Pretext demo.
 */
const PretextFlowAround = ({
  text,
  font = '400 16px "Plus Jakarta Sans"',
  lineHeight = 26,
  shapeSize = 80,
  shapeContent,
  className = "",
  textClassName = "",
}: PretextFlowAroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [lines, setLines] = useState<FlowLine[]>([]);
  const [shapeY, setShapeY] = useState(0);
  const [shapeX, setShapeX] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const preparedRef = useRef<PreparedTextWithSegments | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentShapePos = useRef({ x: 0, y: 0 });

  // Measure container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Prepare text once
  useEffect(() => {
    if (!text || containerWidth <= 0) return;
    try {
      preparedRef.current = prepareWithSegments(text, font);
    } catch {
      preparedRef.current = null;
    }
  }, [text, font, containerWidth]);

  // Layout text flowing around shape
  const layoutAround = useCallback(
    (sX: number, sY: number) => {
      const prepared = preparedRef.current;
      if (!prepared || containerWidth <= 0) return;

      const padding = 12; // gap between shape and text
      const shapeLeft = sX;
      const shapeRight = sX + shapeSize;
      const shapeTop = sY;
      const shapeBottom = sY + shapeSize;

      const newLines: FlowLine[] = [];
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
      let y = 0;
      let safety = 0;

      while (safety < 200) {
        safety++;
        const lineTop = y;
        const lineBottom = y + lineHeight;

        // Check if this line overlaps with the shape vertically
        const overlaps =
          lineBottom > shapeTop + padding / 2 &&
          lineTop < shapeBottom - padding / 2;

        let lineX = 0;
        let availableWidth = containerWidth;

        if (overlaps) {
          // Shape is on the right side
          if (shapeLeft > containerWidth / 2) {
            availableWidth = shapeLeft - padding;
            lineX = 0;
          } else {
            // Shape is on the left side
            availableWidth = containerWidth - shapeRight - padding;
            lineX = shapeRight + padding;
          }
        }

        if (availableWidth < 40) availableWidth = 40;

        const result = layoutNextLine(prepared, cursor, availableWidth);
        if (!result) break;

        newLines.push({
          text: result.text,
          width: result.width,
          x: lineX,
        });

        cursor = result.end;
        y += lineHeight;
      }

      setLines(newLines);
      setTotalHeight(y);
    },
    [containerWidth, shapeSize, lineHeight]
  );

  // Auto-animation: shape floats up and down
  useEffect(() => {
    if (containerWidth <= 0 || !preparedRef.current) return;

    // Initial layout
    const startX = containerWidth - shapeSize - 10;
    currentShapePos.current = { x: startX, y: 0 };
    layoutAround(startX, 0);

    let startTime = performance.now();

    const animate = (time: number) => {
      if (isHovering) {
        // Smoothly interpolate toward mouse position
        const targetX = Math.max(0, Math.min(mousePos.current.x - shapeSize / 2, containerWidth - shapeSize));
        const targetY = Math.max(0, mousePos.current.y - shapeSize / 2);

        currentShapePos.current.x += (targetX - currentShapePos.current.x) * 0.12;
        currentShapePos.current.y += (targetY - currentShapePos.current.y) * 0.12;
      } else {
        // Auto float animation
        const elapsed = (time - startTime) / 1000;
        const maxTravel = 300;
        const autoY = (Math.sin(elapsed * 0.5) * 0.5 + 0.5) * maxTravel;
        const autoX = containerWidth - shapeSize - 10 + Math.sin(elapsed * 0.3) * 40;

        currentShapePos.current.x += (autoX - currentShapePos.current.x) * 0.08;
        currentShapePos.current.y += (autoY - currentShapePos.current.y) * 0.08;
      }

      const sx = currentShapePos.current.x;
      const sy = currentShapePos.current.y;

      setShapeX(sx);
      setShapeY(sy);
      layoutAround(sx, sy);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [containerWidth, shapeSize, isHovering, layoutAround]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{ minHeight: totalHeight || "auto" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* The floating shape */}
      {containerWidth > 0 && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            left: shapeX,
            top: shapeY,
            width: shapeSize,
            height: shapeSize,
            transition: isHovering ? undefined : "filter 0.3s ease",
          }}
        >
          {shapeContent || (
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <img
                src="/favicon.png"
                alt="Vasool"
                className="w-3/4 h-3/4 rounded-xl"
              />
            </div>
          )}
        </div>
      )}

      {/* Rendered text lines */}
      <div className={textClassName} style={{ lineHeight: `${lineHeight}px` }}>
        {lines.map((line, i) => (
          <div
            key={`${i}-${line.x}`}
            style={{
              height: lineHeight,
              paddingLeft: line.x,
              maxWidth: line.x > 0 ? undefined : containerWidth,
            }}
          >
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PretextFlowAround;
