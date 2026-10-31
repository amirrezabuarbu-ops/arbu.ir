"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** max rotation in degrees */
  intensity?: number;
  /** show moving glare highlight */
  glare?: boolean;
};

/**
 * iOS-like 3D tilt card — tracks the pointer and rotates in 3D space
 * with springy inertia, plus a soft glare that follows the cursor.
 */
export function TiltCard({ children, className, intensity = 10, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 180, damping: 22, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);
  const glareX = useTransform(sx, [0, 1], ["18%", "82%"]);
  const glareY = useTransform(sy, [0, 1], ["18%", "82%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(420px circle at ${gx} ${gy}, rgba(255,255,255,0.35), rgba(168,85,247,0.12) 45%, transparent 70%)`
  );

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`relative will-change-transform ${className ?? ""}`}
    >
      {children}
      {glare && !reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      ) : null}
    </motion.div>
  );
}
