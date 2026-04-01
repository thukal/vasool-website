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
  // Unique scatter angle/distance per particle
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
  // Store the fixed shape bounds (where "Thukal" sits when formed)
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

  // Initialize particles
  useEffect(() => {
    if (width <= 0 || height <= 0 || initializedRef.current) return;

    // Make "Thukal" large and prominent
    const shapeW = Math.min(width * 0.55, 380);
    const shapeH = Math.min(140, height * 0.35);
    const fontSize = Math.min(64, shapeW / 4.2);

    const pixels = getTextPixels("Thukal", fontSize, shapeW, shapeH);
    if (pixels.length === 0) return;

    // Position in center-right of the canvas
    const offsetX = width * 0.5 - shapeW / 2;
    const offsetY = height * 0.45 - shapeH / 2;

    // Set fixed bounds for text flow — always use this, not particle positions
    const pad = 24;
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
      // Scatter within a contained radius (not too far)
      const dist = 30 + Math.random() * 70;
      return {
        x: tx + Math.cos(angle) * (100 + Math.random() * 80),
        y: ty + Math.sin(angle) * (100 + Math.random() * 80),
        targetX: tx,
        targetY: ty,
        vx: 0,
        vy: 0,
        size: 1.8 + Math.random() * 1.8,
        opacity: 0.5 + Math.random() * 0.5,
        hue: 155 + Math.random() * 35,
        scatterAngle: angle,
        scatterDist: dist,
      };
    });

    particlesRef.current = particles;
    initializedRef.current = true;

    // Report initial bounds
    onBoundsChange?.(shapeBoundsRef.current);
  }, [width, height, getTextPixels, onBoundsChange]);

  // Animation loop
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

      // Auto cycle: form -> hold -> scatter -> hold
      const cycleLength = 600;
      const phase = (time % cycleLength) / cycleLength;
      let formFactor: number;
      if (phase < 0.25) {
        // Forming: ease in
        const t = phase / 0.25;
        formFactor = t * t * (3 - 2 * t); // smoothstep
      } else if (phase < 0.55) {
        formFactor = 1; // hold formed
      } else if (phase < 0.75) {
        // Scattering: ease out
        const t = (phase - 0.55) / 0.2;
        formFactor = 1 - t * t * (3 - 2 * t);
      } else {
        formFactor = 0; // hold scattered
      }

      const mx = mousePos?.x ?? -1000;
      const my = mousePos?.y ?? -1000;
      const mouseRadius = 100;

      for (const p of particles) {
        let tx: number, ty: number;

        if (isHovering && mousePos) {
          // Particles flee from mouse but stay near their target
          const dx = p.targetX - mx;
          const dy = p.targetY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = ((mouseRadius - dist) / mouseRadius) ** 2;
            const angle = Math.atan2(dy, dx);
            tx = p.targetX + Math.cos(angle) * force * 80;
            ty = p.targetY + Math.sin(angle) * force * 80;
          } else {
            tx = p.targetX;
            ty = p.targetY;
          }
        } else {
          // Auto: interpolate between formed and scattered
          const sx = p.targetX + Math.cos(p.scatterAngle) * p.scatterDist;
          const sy = p.targetY + Math.sin(p.scatterAngle) * p.scatterDist;
          tx = p.targetX + (sx - p.targetX) * (1 - formFactor);
          ty = p.targetY + (sy - p.targetY) * (1 - formFactor);
        }

        // Spring physics
        const dx = tx - p.x;
        const dy = ty - p.y;
        p.vx += dx * 0.06;
        p.vy += dy * 0.06;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        // Subtle breathing motion
        const floatX = Math.sin(time * 0.015 + p.targetX * 0.05) * 2;
        const floatY = Math.cos(time * 0.012 + p.targetY * 0.05) * 2;

        const drawX = p.x + floatX;
        const drawY = p.y + floatY;

        // Draw particle with glow
        const alpha = p.opacity * (0.5 + formFactor * 0.5);
        const lightness = 40 + formFactor * 20;

        // Outer glow
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, ${lightness}%, ${alpha * 0.15})`;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, ${lightness + 10}%, ${alpha})`;
        ctx.fill();
      }

      // Always report the fixed "Thukal" region bounds (not actual particle spread)
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
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
};

export default ThukalParticles;
