import { useCallback, useEffect, useRef, useState } from "react";
import { prepare, layout, prepareWithSegments, layoutWithLines } from "@chenglou/pretext";

/**
 * Hook that uses Pretext to find the optimal balanced width for text,
 * preventing orphan words and creating visually pleasing line breaks.
 */
export function useBalancedText(
  text: string,
  font: string,
  lineHeight: number,
  maxWidth: number
) {
  const [balancedWidth, setBalancedWidth] = useState(maxWidth);

  useEffect(() => {
    if (!text || maxWidth <= 0) return;

    try {
      const prepared = prepare(text, font);
      const { lineCount } = layout(prepared, maxWidth, lineHeight);

      if (lineCount <= 1) {
        setBalancedWidth(maxWidth);
        return;
      }

      // Binary search for the narrowest width that keeps the same line count
      let lo = maxWidth * 0.5;
      let hi = maxWidth;
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
      setBalancedWidth(maxWidth);
    }
  }, [text, font, lineHeight, maxWidth]);

  return balancedWidth;
}

/**
 * Hook that uses Pretext to measure text height accurately without DOM reflow.
 */
export function usePretextHeight(
  text: string,
  font: string,
  lineHeight: number,
  containerWidth: number
) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!text || containerWidth <= 0) return;

    try {
      const prepared = prepare(text, font);
      const result = layout(prepared, containerWidth, lineHeight);
      setHeight(result.height);
    } catch {
      setHeight(0);
    }
  }, [text, font, lineHeight, containerWidth]);

  return height;
}

/**
 * Hook that breaks text into individual lines using Pretext for line-by-line
 * reveal animations.
 */
export function usePretextLines(
  text: string,
  font: string,
  lineHeight: number,
  containerWidth: number
) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (!text || containerWidth <= 0) {
      setLines([text]);
      return;
    }

    try {
      const prepared = prepareWithSegments(text, font);
      const result = layoutWithLines(prepared, containerWidth, lineHeight);
      setLines(result.lines.map((line) => line.text));
    } catch {
      setLines([text]);
    }
  }, [text, font, lineHeight, containerWidth]);

  return lines;
}

/**
 * Hook that measures the container width via ResizeObserver.
 */
export function useContainerWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, width };
}

/**
 * Hook for masonry layout: measures heights of items to compute optimal
 * column placement.
 */
export function usePretextMasonry(
  items: Array<{ title: string; description: string }>,
  titleFont: string,
  descFont: string,
  titleLineHeight: number,
  descLineHeight: number,
  columnWidth: number,
  padding: number,
  columns: number
) {
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; height: number; column: number }>
  >([]);

  useEffect(() => {
    if (columnWidth <= 0 || columns <= 0) return;

    try {
      const contentWidth = columnWidth - padding * 2;
      const colHeights = new Array(columns).fill(0);
      const gap = 16;
      const iconAreaHeight = 56; // icon + margin

      const newPositions = items.map((item) => {
        // Find shortest column
        const minCol = colHeights.indexOf(Math.min(...colHeights));

        const titlePrepared = prepare(item.title, titleFont);
        const { height: titleH } = layout(
          titlePrepared,
          contentWidth,
          titleLineHeight
        );

        const descPrepared = prepare(item.description, descFont);
        const { height: descH } = layout(
          descPrepared,
          contentWidth,
          descLineHeight
        );

        const totalHeight = padding + iconAreaHeight + titleH + 8 + descH + padding;

        const pos = {
          x: minCol * (columnWidth + gap),
          y: colHeights[minCol],
          height: totalHeight,
          column: minCol,
        };

        colHeights[minCol] += totalHeight + gap;

        return pos;
      });

      setPositions(newPositions);
    } catch {
      setPositions([]);
    }
  }, [items, titleFont, descFont, titleLineHeight, descLineHeight, columnWidth, padding, columns]);

  return positions;
}
