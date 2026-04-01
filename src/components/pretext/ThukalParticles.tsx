import { useEffect, useRef, useCallback } from "react";

interface Particle {
  // Current position
  x: number;
  y: number;
  // Target position (letter shape)
  targetX: number;
  targetY: number;
  // Scattered position
  scatterX: number;
  scatterY: number;
  // Velocity for physics
  vx: number;
  vy: number;
  // Visual
  size: number;
  opacity: number;
  hue: number;
}

interface ThukalParticlesProps {
  width: number;
  height: number;
  /** Bounding box of the particle cluster, updated each frame */
  onBoundsChange?: (bounds: { x: number; y: number; w: number; h: number }) => void;
  /** Whether mouse is hovering (scatter particles) */
  mousePos: { x: number; y: number } | null;
  isHovering: boolean;
}

/**
 * Canvas-based particle system that forms the word "Thukal".
 * Particles scatter when the mouse approaches and reassemble when it leaves.
 */
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
  const phaseRef = useRef(0); // 0 = forming, 1 = formed, 2 = scattering

  // Sample pixel positions from text rendered on offscreen canvas
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
      const step = 3; // Sample every 3rd pixel for density

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

    const shapeW = Math.min(width, 220);
    const shapeH = Math.min(height, 90);
    const fontSize = Math.min(38, shapeW / 4.5);

    const pixels = getTextPixels("Thukal", fontSize, shapeW, shapeH);
    if (pixels.length === 0) return;

    // Center the text shape in the canvas
    const offsetX = (width - shapeW) / 2;
    const offsetY = (height - shapeH) / 2;

    const particles: Particle[] = pixels.map((p) => {
      const tx = p.x + offsetX;
      const ty = p.y + offsetY;
      // Start scattered randomly
      const angle = Math.random() * Math.PI * 2;
      const dist = 150 + Math.random() * 250;
      return {
        x: tx + Math.cos(angle) * dist,
        y: ty + Math.sin(angle) * dist,
        targetX: tx,
        targetY: ty,
        scatterX: tx + Math.cos(angle) * dist,
        scatterY: ty + Math.sin(angle) * dist,
        vx: 0,
        vy: 0,
        size: 1.5 + Math.random() * 1.5,
        opacity: 0.4 + Math.random() * 0.6,
        hue: 158 + Math.random() * 30, // emerald-teal range
      };
    });

    particlesRef.current = particles;
    initializedRef.current = true;
  }, [width, height, getTextPixels]);

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

      // Auto cycle: form -> hold -> scatter -> hold -> form
      const cycleLength = 480; // frames per full cycle
      const phase = (time % cycleLength) / cycleLength;
      // 0-0.3: forming, 0.3-0.6: hold formed, 0.6-0.75: scattering, 0.75-1: hold scattered
      let formFactor: number;
      if (phase < 0.3) {
        formFactor = phase / 0.3; // 0 -> 1
      } else if (phase < 0.6) {
        formFactor = 1;
      } else if (phase < 0.75) {
        formFactor = 1 - (phase - 0.6) / 0.15; // 1 -> 0
      } else {
        formFactor = 0;
      }

      // Mouse interaction overrides: scatter near mouse
      const mx = mousePos?.x ?? -1000;
      const my = mousePos?.y ?? -1000;
      const mouseRadius = 80;

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

      for (const p of particles) {
        // Target: interpolate between scatter and formed positions
        let tx: number, ty: number;

        if (isHovering && mousePos) {
          // When hovering, particles flee from mouse
          const dx = p.targetX - mx;
          const dy = p.targetY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            tx = p.targetX + Math.cos(angle) * force * 120;
            ty = p.targetY + Math.sin(angle) * force * 120;
          } else {
            tx = p.targetX;
            ty = p.targetY;
          }
        } else {
          // Auto animation
          tx = p.targetX + (p.scatterX - p.targetX) * (1 - formFactor);
          ty = p.targetY + (p.scatterY - p.targetY) * (1 - formFactor);
        }

        // Spring physics toward target
        const dx = tx - p.x;
        const dy = ty - p.y;
        p.vx += dx * 0.08;
        p.vy += dy * 0.08;
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx;
        p.y += p.vy;

        // Add subtle floating motion when formed
        const floatX = Math.sin(time * 0.02 + p.targetX * 0.1) * 1.5;
        const floatY = Math.cos(time * 0.015 + p.targetY * 0.1) * 1.5;

        const drawX = p.x + floatX;
        const drawY = p.y + floatY;

        // Track bounds
        minX = Math.min(minX, drawX - p.size);
        minY = Math.min(minY, drawY - p.size);
        maxX = Math.max(maxX, drawX + p.size);
        maxY = Math.max(maxY, drawY + p.size);

        // Draw particle
        const alpha = p.opacity * (0.6 + formFactor * 0.4);
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, ${45 + formFactor * 15}%, ${alpha})`;
        ctx.fill();
      }

      // Report bounds for text flow
      if (onBoundsChange && minX < Infinity) {
        const pad = 16;
        onBoundsChange({
          x: Math.max(0, minX - pad),
          y: Math.max(0, minY - pad),
          w: Math.min(width, maxX - minX + pad * 2),
          h: Math.min(height, maxY - minY + pad * 2),
        });
      }

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
