import React, { useEffect, useRef } from "react";

export default function PetalsCanvas({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const petals = [];
    const petalColors = [
      { r: 253, g: 216, b: 228, a: 0.75 }, // soft blush pink
      { r: 245, g: 198, b: 207, a: 0.8 },  // dusty rose
      { r: 255, g: 236, b: 232, a: 0.85 }, // soft peach
      { r: 238, g: 205, b: 163, a: 0.6 },  // champagne gold shimmer
      { r: 255, g: 250, b: 240, a: 0.7 },  // warm ivory
    ];

    const petalCount = window.innerWidth < 768 ? 18 : 28;

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 9 + 7,
        speedX: Math.random() * 1.2 - 0.6,
        speedY: Math.random() * 0.9 + 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.02 - 0.01),
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        oscillationDistance: Math.random() * 1.8 + 0.8,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        isGoldSparkle: Math.random() > 0.75,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(time * p.oscillationSpeed) * p.oscillationDistance + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isGoldSparkle) {
          // Delicate gold sparkle starlet
          ctx.beginPath();
          ctx.fillStyle = `rgba(212, 175, 55, ${0.4 + Math.sin(time * 3 + p.x) * 0.3})`;
          ctx.arc(0, 0, 2.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Hand-painted rose petal shape
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(
            p.size * 0.75,
            -p.size * 0.6,
            p.size * 0.85,
            p.size * 0.5,
            0,
            p.size
          );
          ctx.bezierCurveTo(
            -p.size * 0.85,
            p.size * 0.5,
            -p.size * 0.75,
            -p.size * 0.6,
            0,
            -p.size
          );
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.color.a})`;
          ctx.fill();

          // Subtle petal highlight/crease
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.7);
          ctx.lineTo(0, p.size * 0.7);
          ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 w-full h-full"
      style={{ pointerEvents: "none", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 30 }}
      aria-hidden="true"
    />
  );
}
