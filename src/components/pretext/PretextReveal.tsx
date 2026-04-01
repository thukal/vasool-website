import { useEffect, useState } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import { useContainerWidth } from "@/hooks/usePretext";

interface PretextRevealProps {
  children: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
  className?: string;
  lineClassName?: string;
  font?: string;
  lineHeight?: number;
  staggerMs?: number;
  animate?: boolean;
}

/**
 * Renders text line-by-line with staggered reveal animations.
 * Uses Pretext to split text into exact visual lines matching CSS rendering.
 */
const PretextReveal = ({
  children,
  as: Tag = "p",
  className = "",
  lineClassName = "",
  font = '400 18px "Plus Jakarta Sans"',
  lineHeight = 28,
  staggerMs = 80,
  animate = true,
}: PretextRevealProps) => {
  const { ref, width: containerWidth } = useContainerWidth();
  const [lines, setLines] = useState<string[]>([children]);
  const [visible, setVisible] = useState(!animate);

  useEffect(() => {
    if (!children || containerWidth <= 0) {
      setLines([children]);
      return;
    }

    try {
      const prepared = prepareWithSegments(children, font);
      const result = layoutWithLines(prepared, containerWidth, lineHeight);
      setLines(result.lines.map((line) => line.text));
    } catch {
      setLines([children]);
    }
  }, [children, font, lineHeight, containerWidth]);

  useEffect(() => {
    if (!animate) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [animate, ref]);

  return (
    <div ref={ref}>
      <Tag className={className} aria-label={children}>
        {lines.map((line, i) => (
          <span
            key={`${i}-${line.slice(0, 10)}`}
            className={lineClassName}
            style={{
              display: "block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.5s ease ${i * staggerMs}ms, transform 0.5s ease ${i * staggerMs}ms`,
            }}
          >
            {line}
          </span>
        ))}
      </Tag>
    </div>
  );
};

export default PretextReveal;
