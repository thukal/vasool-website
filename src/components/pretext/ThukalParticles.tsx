import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  scatterAngle: number;
  scatterDist: number;
}

interface ThukalParticlesProps {
  width: number;
  height: number;
  onBoundsChange?: (bounds: { x: number; y: number; w: number; h: number }) => void;
  mousePos: { x: number; y: number } | null;
  isHovering: boolean;
}

const ThukalParticles = ({
  width,
  height,
  onBoundsChange,
  mousePos,
  isHovering,
}: ThukalParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const initializedRef = useRef(false);
  const shapeBoundsRef = useRef({ x: 0, y: 0, w: 0, h: 0 });

  const getTextPixels = useCallback(
    (text: string, fontSize: number, maxW: number, maxH: number) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = maxW;
      offscreen.height = maxH;
      const ctx = offscreen.getContext("2d");
      if (!ctx) return [];

      ctx.fillStyle = "#fff";
      ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(text, maxW / 2, maxH / 2);

      const imageData = ctx.getImageData(0, 0, maxW, maxH);
      const pixels: { x: number; y: number }[] = [];
      const step = 3;

      for (let y = 0; y < maxH; y += step) {
        for (let x = 0; x < maxW; x += step) {
          const idx = (y * maxW + x) * 4;
          if (imageData.data[idx + 3] > 128) {
            pixels.push({ x, y });
          }
        }
      }

      return pixels;
    },
    []
  );

  useEffect(() => {
    if (width <= 0 || height <= 0 || initializedRef.current) return;

    // Compact shape — not too wide so text columns stay readable
    const shapeW = Math.min(width * 0.4, 280);
    const shapeH = Math.min(100, height * 0.25);
    const fontSize = Math.min(52, shapeW / 4);

    const pixels = getTextPixels("Thukal", fontSize, shapeW, shapeH);
    if (pixels.length === 0) return;

    // Center horizontally, place in upper-middle vertically
    const offsetX = (width - shapeW) / 2;
    const offsetY = height * 0.35 - shapeH / 2;

    // Tight bounds — just enough padding for the glow
    const pad = 14;
    shapeBoundsRef.current = {
      x: offsetX - pad,
      y: offsetY - pad,
      w: shapeW + pad * 2,
      h: shapeH + pad * 2,
    };

    const particles: Particle[] = pixels.map((p) => {
      const tx = p.x + offsetX;
      const ty = p.y + offsetY;
      const angle = Math.random() * Math.PI * 2;
      // Scatter only within the shape bounds — never into text
      const dist = 10 + Math.random() * 40;
      return {
        x: tx,
        y: ty,
        targetX: tx,
        targetY: ty,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: 1.5 + Math.random() * 1.5,
        opacity: 0.5 + Math.random() * 0.5,
        hue: 155 + Math.random() * 35,
        scatterAngle: angle,
        scatterDist: dist,
      };
    });

    particlesRef.current = particles;
    initializedRef.current = true;
    onBoundsChange?.(shapeBoundsRef.current);
  }, [width, height, getTextPixels, onBoundsChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width <= 0 || height <= 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const bounds = shapeBoundsRef.current;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      if (particles.length === 0) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      // Cycle: form -> hold -> scatter -> hold
      const cycleLength = 540;
      const phase = (time % cycleLength) / cycleLength;
      let formFactor: number;
      if (phase < 0.2) {
        const t = phase / 0.2;
        formFactor = t * t * (3 - 2 * t);
      } else if (phase < 0.55) {
        formFactor = 1;
      } else if (phase < 0.7) {
        const t = (phase - 0.55) / 0.15;
        formFactor = 1 - t * t * (3 - 2 * t);
      } else {
        formFactor = 0;
      }

      const mx = mousePos?.x ?? -1000;
      const my = mousePos?.y ?? -1000;
      const mouseRadius = 90;

      // Clip drawing to bounds region so particles never render over text
      ctx.save();
      ctx.beginPath();
      const clipPad = 8;
      ctx.roundRect(
        bounds.x - clipPad,
        bounds.y - clipPad,
        bounds.w + clipPad * 2,
        bounds.h + clipPad * 2,
        12
      );
      ctx.clip();

      for (const p of particles) {
        let tx: number, ty: number;

        if (isHovering && mousePos) {
          const dx = p.targetX - mx;
          const dy = p.targetY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = ((mouseRadius - dist) / mouseRadius) ** 2;
            const angle = Math.atan2(dy, dx);
            tx = p.targetX + Math.cos(angle) * force * 50;
            ty = p.targetY + Math.sin(angle) * force * 50;
          } else {
            tx = p.targetX;
            ty = p.targetY;
          }
        } else {
          const sx = p.targetX + Math.cos(p.scatterAngle) * p.scatterDist;
          const sy = p.targetY + Math.sin(p.scatterAngle) * p.scatterDist;
          tx = p.targetX + (sx - p.targetX) * (1 - formFactor);
          ty = p.targetY + (sy - p.targetY) * (1 - formFactor);
        }

        // Spring physics
        const dx = tx - p.x;
        const dy = ty - p.y;
        p.vx += dx * 0.07;
        p.vy += dy * 0.07;
        p.vx *= 0.86;
        p.vy *= 0.86;
        p.x += p.vx;
        p.y += p.vy;

        // Breathing motion
        const floatX = Math.sin(time * 0.015 + p.targetX * 0.05) * 1.5;
        const floatY = Math.cos(time * 0.012 + p.targetY * 0.05) * 1.5;

        const drawX = p.x + floatX;
        const drawY = p.y + floatY;

        const alpha = p.opacity * (0.4 + formFactor * 0.6);
        const lightness = 40 + formFactor * 20;

        // Glow
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, ${lightness}%, ${alpha * 0.12})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, ${lightness + 10}%, ${alpha})`;
        ctx.fill();
      }

      ctx.restore();

      onBoundsChange?.(shapeBoundsRef.current);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [width, height, mousePos, isHovering, onBoundsChange]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ThukalParticles;
