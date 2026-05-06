"use client";
import { useRef, useState } from "react";

export default function MagneticButton({ children, className, style, onClick, href }:
  { children: React.ReactNode; className?: string; style?: React.CSSProperties; onClick?: () => void; href?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * 0.35, y: (e.clientY - cy) * 0.35 });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  const inner = (
    <div ref={ref} className={className} style={{
      ...style,
      transform: `translate(${pos.x}px, ${pos.y}px)`,
      transition: "transform 0.3s cubic-bezier(0.25,1,0.5,1)",
      display: "inline-block",
    }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (href) return <a href={href} style={{ textDecoration: "none" }}>{inner}</a>;
  return inner;
}
