import { useEffect, useState, type ReactNode } from "react";
import { prepare, layout } from "@chenglou/pretext";
import { useContainerWidth } from "@/hooks/usePretext";

interface MasonryItem {
  title: string;
  description: string;
  content: ReactNode;
}

interface PretextMasonryProps {
  items: MasonryItem[];
  columns?: number;
  gap?: number;
  titleFont?: string;
  descFont?: string;
  titleLineHeight?: number;
  descLineHeight?: number;
  extraHeight?: number;
  className?: string;
}

/**
 * A masonry grid layout that uses Pretext to accurately measure text heights
 * and position cards without layout shift or DOM measurement.
 */
const PretextMasonry = ({
  items,
  columns = 3,
  gap = 20,
  titleFont = '700 18px "Plus Jakarta Sans"',
  descFont = '400 14px "Plus Jakarta Sans"',
  titleLineHeight = 24,
  descLineHeight = 22,
  extraHeight = 100, // icon + padding
  className = "",
}: PretextMasonryProps) => {
  const { ref, width: totalWidth } = useContainerWidth();
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; height: number }>
  >([]);
  const [totalHeight, setTotalHeight] = useState(0);

  // Responsive column count
  const actualColumns =
    totalWidth < 640 ? 1 : totalWidth < 1024 ? 2 : columns;

  const colWidth =
    totalWidth > 0
      ? (totalWidth - gap * (actualColumns - 1)) / actualColumns
      : 0;

  useEffect(() => {
    if (colWidth <= 0) return;

    try {
      const contentWidth = colWidth - 48; // padding
      const colHeights = new Array(actualColumns).fill(0);

      const newPositions = items.map((item) => {
        const minCol = colHeights.indexOf(Math.min(...colHeights));

        let titleH = 0;
        let descH = 0;

        try {
          const titlePrepared = prepare(item.title, titleFont);
          titleH = layout(titlePrepared, contentWidth, titleLineHeight).height;
        } catch {
          titleH = titleLineHeight;
        }

        try {
          const descPrepared = prepare(item.description, descFont);
          descH = layout(descPrepared, contentWidth, descLineHeight).height;
        } catch {
          descH = descLineHeight * 2;
        }

        const height = extraHeight + titleH + descH;

        const pos = {
          x: minCol * (colWidth + gap),
          y: colHeights[minCol],
          height,
        };

        colHeights[minCol] += height + gap;

        return pos;
      });

      setPositions(newPositions);
      setTotalHeight(Math.max(...colHeights));
    } catch {
      setPositions([]);
    }
  }, [items, colWidth, actualColumns, gap, titleFont, descFont, titleLineHeight, descLineHeight, extraHeight]);

  if (totalWidth === 0 || positions.length === 0) {
    // Fallback: render as regular grid until measured
    return (
      <div ref={ref} className={className}>
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: `repeat(${actualColumns}, 1fr)`,
          }}
        >
          {items.map((item, i) => (
            <div key={i}>{item.content}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <div className="relative" style={{ height: totalHeight }}>
        {items.map((item, i) => {
          const pos = positions[i];
          if (!pos) return null;
          return (
            <div
              key={i}
              className="absolute transition-all duration-500 ease-out"
              style={{
                left: pos.x,
                top: pos.y,
                width: colWidth,
                height: pos.height,
              }}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PretextMasonry;
