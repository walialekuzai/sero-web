"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursor.style.left = curX + "px";
      cursor.style.top = curY + "px";
      requestAnimationFrame(animate);
    };

    const onEnter = () => cursor.classList.add("hovering");
    const onLeave = () => cursor.classList.remove("hovering");

    document.addEventListener("mousemove", move);
    requestAnimationFrame(animate);

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const newTargets = document.querySelectorAll("a, button, [data-cursor]");
      newTargets.forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
}
