import { useEffect, useState } from "react";
import { prepare, layout } from "@chenglou/pretext";
import { useContainerWidth } from "@/hooks/usePretext";

interface BalancedTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  font?: string;
  lineHeight?: number;
}

/**
 * A text component that uses Pretext to balance line breaks,
 * preventing orphan words and creating visually even lines.
 */
const BalancedText = ({
  children,
  as: Tag = "h2",
  className = "",
  font = '700 48px "Plus Jakarta Sans"',
  lineHeight = 56,
}: BalancedTextProps) => {
  const { ref, width: containerWidth } = useContainerWidth();
  const [balancedWidth, setBalancedWidth] = useState<number | undefined>();

  useEffect(() => {
    if (!children || containerWidth <= 0) return;

    try {
      const prepared = prepare(children, font);
      const { lineCount } = layout(prepared, containerWidth, lineHeight);

      if (lineCount <= 1) {
        setBalancedWidth(undefined);
        return;
      }

      // Binary search for narrowest width that maintains the same line count
      let lo = containerWidth * 0.5;
      let hi = containerWidth;
      while (hi - lo > 2) {
        const mid = (lo + hi) / 2;
        const { lineCount: midLines } = layout(prepared, mid, lineHeight);
        if (midLines <= lineCount) {
          hi = mid;
        } else {
          lo = mid;
        }
      }

      setBalancedWidth(Math.ceil(hi));
    } catch {
      setBalancedWidth(undefined);
    }
  }, [children, font, lineHeight, containerWidth]);

  return (
    <div ref={ref}>
      <Tag
        className={className}
        style={balancedWidth ? { maxWidth: balancedWidth, marginLeft: "auto", marginRight: "auto" } : undefined}
      >
        {children}
      </Tag>
    </div>
  );
};

export default BalancedText;
