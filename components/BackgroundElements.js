'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundElements() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawShape = (x, y, radius, sides) => {
        ctx.beginPath();
        for (let i = 0; i < sides; i++) {
          const angle = (i / sides) * Math.PI * 2;
          const nx = x + Math.cos(angle) * radius;
          const ny = y + Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(nx, ny);
          else ctx.lineTo(nx, ny);
        }
        ctx.closePath();
        ctx.stroke();
      };
    
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = Date.now() * 0.001;
        
        ctx.strokeStyle = `rgba(0, 82, 204, 0.1)`; // Use primary color with low opacity
        ctx.lineWidth = 1;
    
        for (let i = 0; i < 5; i++) {
          const x = Math.sin(time + i) * 100 + canvas.width / 2;
          const y = Math.cos(time + i) * 100 + canvas.height / 2;
          const size = Math.sin(time) * 20 + 50;
          drawShape(x, y, size, 6);
        }
    
        animationFrameId = requestAnimationFrame(animate);
      };
    
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}