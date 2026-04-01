import { useEffect, useState } from "react";
import { prepare, layout } from "@chenglou/pretext";
import { useContainerWidth } from "@/hooks/usePretext";

interface PretextTextProps {
  children: string;
  as?: "p" | "span" | "div";
  className?: string;
  font?: string;
  lineHeight?: number;
  reserveHeight?: boolean;
}

/**
 * A text component that uses Pretext to pre-calculate exact height,
 * preventing layout shift when content loads or changes.
 */
const PretextText = ({
  children,
  as: Tag = "p",
  className = "",
  font = '400 16px "Plus Jakarta Sans"',
  lineHeight = 26,
  reserveHeight = true,
}: PretextTextProps) => {
  const { ref, width: containerWidth } = useContainerWidth();
  const [measuredHeight, setMeasuredHeight] = useState<number | undefined>();

  useEffect(() => {
    if (!children || containerWidth <= 0 || !reserveHeight) return;

    try {
      const prepared = prepare(children, font);
      const result = layout(prepared, containerWidth, lineHeight);
      setMeasuredHeight(result.height);
    } catch {
      setMeasuredHeight(undefined);
    }
  }, [children, font, lineHeight, containerWidth, reserveHeight]);

  return (
    <div ref={ref}>
      <Tag
        className={className}
        style={
          measuredHeight
            ? { minHeight: measuredHeight, lineHeight: `${lineHeight}px` }
            : undefined
        }
      >
        {children}
      </Tag>
    </div>
  );
};

export default PretextText;
