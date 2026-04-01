import { useEffect, useRef, useState, useCallback } from "react";
import { prepareWithSegments, layoutNextLine, type LayoutCursor, type PreparedTextWithSegments } from "@chenglou/pretext";
import ThukalParticles from "./ThukalParticles";

interface FlowLine {
  text: string;
  width: number;
  x: number;
}

interface ShapeBounds {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface PretextFlowAroundProps {
  text: string;
  font?: string;
  lineHeight?: number;
  className?: string;
  textClassName?: string;
}

const PretextFlowAround = ({
  text,
  font = '400 16px "Plus Jakarta Sans"',
  lineHeight = 26,
  className = "",
  textClassName = "",
}: PretextFlowAroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [lines, setLines] = useState<FlowLine[]>([]);
  const [totalHeight, setTotalHeight] = useState(0);
  const preparedRef = useRef<PreparedTextWithSegments | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const boundsRef = useRef<ShapeBounds>({ x: 0, y: 0, w: 0, h: 0 });
  const hasLaidOut = useRef(false);

  // Measure container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
        hasLaidOut.current = false; // re-layout on resize
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
    hasLaidOut.current = false;
  }, [text, font, containerWidth]);

  // Layout text flowing around the particle bounds
  const doLayout = useCallback(
    (bounds: ShapeBounds) => {
      const prepared = preparedRef.current;
      if (!prepared || containerWidth <= 0) return;

      const padding = 16;
      const shapeLeft = bounds.x;
      const shapeRight = bounds.x + bounds.w;
      const shapeTop = bounds.y;
      const shapeBottom = bounds.y + bounds.h;

      const newLines: FlowLine[] = [];
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
      let y = 0;
      let safety = 0;

      while (safety < 300) {
        safety++;
        const lineTop = y;
        const lineBottom = y + lineHeight;

        const overlaps =
          bounds.w > 10 &&
          lineBottom > shapeTop &&
          lineTop < shapeBottom;

        let lineX = 0;
        let availableWidth = containerWidth;

        if (overlaps) {
          // Put text on the side with more space
          if (shapeLeft > containerWidth - shapeRight) {
            // More space on the left
            availableWidth = Math.max(80, shapeLeft - padding);
            lineX = 0;
          } else {
            // More space on the right
            availableWidth = Math.max(80, containerWidth - shapeRight - padding);
            lineX = shapeRight + padding;
          }
        }

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
    [containerWidth, lineHeight]
  );

  // Handle bounds from particle system — layout once with fixed bounds
  const handleBoundsChange = useCallback(
    (bounds: ShapeBounds) => {
      boundsRef.current = bounds;
      if (!hasLaidOut.current) {
        hasLaidOut.current = true;
        doLayout(bounds);
      }
    },
    [doLayout]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const canvasHeight = Math.max(totalHeight, 400);

  return (
    <div
      ref={containerRef}
      className={`relative select-none cursor-crosshair ${className}`}
      style={{ minHeight: canvasHeight }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos(null);
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Particle system */}
      {containerWidth > 0 && (
        <ThukalParticles
          width={containerWidth}
          height={canvasHeight}
          onBoundsChange={handleBoundsChange}
          mousePos={mousePos}
          isHovering={isHovering}
        />
      )}

      {/* Rendered text lines — above canvas so particles never cover text */}
      <div className={`relative ${textClassName}`} style={{ lineHeight: `${lineHeight}px`, zIndex: 2 }}>
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              height: lineHeight,
              paddingLeft: line.x,
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
