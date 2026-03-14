"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const defaultTransition = {
  type: "tween" as const,
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const viewportOnce = { once: true, margin: "-80px 0px -80px 0px", amount: 0.2 };

/** Text: fade in + slide from direction */
export function ScrollRevealText({
  children,
  direction = "up",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  delay?: number;
}) {
  const dirMap = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
  };
  const d = dirMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x: d.x, y: d.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Image: scale or float in from direction */
export function ScrollRevealImage({
  children,
  direction = "up",
  scaleIn = true,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  scaleIn?: boolean;
  className?: string;
  delay?: number;
}) {
  const dirMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 48, y: 0 },
    right: { x: -48, y: 0 },
  };
  const d = dirMap[direction];
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: d.x,
        y: d.y,
        scale: scaleIn ? 0.92 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={viewportOnce}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** CTA / Button: subtle pop or slide */
export function ScrollRevealCTA({
  children,
  pop = true,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  pop?: boolean;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: pop ? 0.94 : 1,
        y: pop ? 0 : 12,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={viewportOnce}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Section / card group: staggered children */
export function ScrollRevealStagger({
  children,
  className = "",
  staggerChildren = 0.08,
  delayChildren = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween" as const, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/** Single item inside ScrollRevealStagger */
export function ScrollRevealStaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/** Generic reveal with custom variants; use when you need one-off behavior. */
export function ScrollReveal({
  children,
  className = "",
  initial = { opacity: 0, y: 20 },
  animateInView = { opacity: 1, y: 0 },
  transition = defaultTransition,
}: {
  children: ReactNode;
  className?: string;
  initial?: Record<string, unknown>;
  animateInView?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}) {
  return (
    <motion.div
      initial={initial as never}
      whileInView={animateInView as never}
      viewport={viewportOnce}
      transition={transition as never}
      className={className}
    >
      {children}
    </motion.div>
  );
}
