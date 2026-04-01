import { useEffect, useRef, useCallback, useState } from "react";

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
}

/**
 * Self-contained canvas particle system that forms "Thukal".
 * Particles scatter and reassemble in a cycle. Mouse interaction scatters them.
 */
const ThukalParticles = ({ width, height }: ThukalParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const initializedRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseRef = useRef({ x: -999, y: -999 });

  const getTextPixels = useCallback(
    (text: string, fontSize: number, w: number, h: number) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const ctx = offscreen.getContext("2d");
      if (!ctx) return [];

      ctx.fillStyle = "#fff";
      ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(text, w / 2, h / 2);

      const imageData = ctx.getImageData(0, 0, w, h);
      const pixels: { x: number; y: number }[] = [];
      const step = 3;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const idx = (y * w + x) * 4;
          if (imageData.data[idx + 3] > 128) pixels.push({ x, y });
        }
      }
      return pixels;
    },
    []
  );

  useEffect(() => {
    if (width <= 0 || height <= 0 || initializedRef.current) return;

    const fontSize = Math.min(56, width / 4.5);
    const pixels = getTextPixels("Thukal", fontSize, width, height);
    if (pixels.length === 0) return;

    const particles: Particle[] = pixels.map((p) => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 15 + Math.random() * 35;
      return {
        x: width / 2 + (Math.random() - 0.5) * width,
        y: height / 2 + (Math.random() - 0.5) * height,
        targetX: p.x,
        targetY: p.y,
        vx: 0,
        vy: 0,
        size: 1.5 + Math.random() * 1.5,
        opacity: 0.5 + Math.random() * 0.5,
        hue: 155 + Math.random() * 35,
        scatterAngle: angle,
        scatterDist: dist,
      };
    });

    particlesRef.current = particles;
    initializedRef.current = true;
  }, [width, height, getTextPixels]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width <= 0 || height <= 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      if (particles.length === 0) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      // Cycle: form -> hold -> scatter -> hold
      const cycleLen = 540;
      const phase = (time % cycleLen) / cycleLen;
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

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseRadius = 80;

      for (const p of particles) {
        let tx: number, ty: number;

        if (isHovering) {
          const dx = p.targetX - mx;
          const dy = p.targetY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = ((mouseRadius - dist) / mouseRadius) ** 2;
            const angle = Math.atan2(dy, dx);
            tx = p.targetX + Math.cos(angle) * force * 60;
            ty = p.targetY + Math.sin(angle) * force * 60;
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

        const ddx = tx - p.x;
        const ddy = ty - p.y;
        p.vx += ddx * 0.07;
        p.vy += ddy * 0.07;
        p.vx *= 0.86;
        p.vy *= 0.86;
        p.x += p.vx;
        p.y += p.vy;

        const floatX = Math.sin(time * 0.015 + p.targetX * 0.05) * 1.5;
        const floatY = Math.cos(time * 0.012 + p.targetY * 0.05) * 1.5;
        const drawX = p.x + floatX;
        const drawY = p.y + floatY;

        const alpha = p.opacity * (0.4 + formFactor * 0.6);
        const lightness = 40 + formFactor * 20;

        // Glow
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, ${lightness}%, ${alpha * 0.15})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, ${lightness + 10}%, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [width, height, isHovering]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-full cursor-crosshair"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={(e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width) * width,
          y: ((e.clientY - rect.top) / rect.height) * height,
        };
      }}
    />
  );
};

export default ThukalParticles;
