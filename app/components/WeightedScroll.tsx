"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

type WeightedScrollContextValue = {
  /** Smoothed scroll Y (lagging for inertia feel) */
  smoothScrollY: number;
  /** Raw scroll Y */
  scrollY: number;
  /** Scroll progress 0..1 over the document */
  scrollProgress: number;
};

const WeightedScrollContext = createContext<WeightedScrollContextValue | null>(
  null
);

const LERP = 0.08;
const DOCUMENT_HEIGHT_KEY = "weighted-scroll-doc-height";

function useWeightedScroll() {
  const ctx = useContext(WeightedScrollContext);
  if (!ctx)
    return {
      smoothScrollY: 0,
      scrollY: 0,
      scrollProgress: 0,
    };
  return ctx;
}

type WeightedScrollProviderProps = {
  children: ReactNode;
};

/** Provides smoothed scroll position for inertia/parallax. Use on landing page only. */
function WeightedScrollProvider({ children }: WeightedScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [smoothScrollY, setSmoothScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const smoothRef = useRef(0);
  const rafRef = useRef<number>(0);

  const onScroll = useCallback(() => {
    const y = typeof window === "undefined" ? 0 : window.scrollY;
    setScrollY(y);
    const maxScroll =
      typeof document === "undefined"
        ? 1
        : Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight
          );
    setScrollProgress(y / maxScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    smoothRef.current = scrollY;
  }, [scrollY]);

  useEffect(() => {
    let prev = smoothRef.current;
    function tick() {
      const target = scrollY;
      prev += (target - prev) * LERP;
      smoothRef.current = prev;
      setSmoothScrollY(prev);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [scrollY]);

  const value: WeightedScrollContextValue = {
    smoothScrollY,
    scrollY,
    scrollProgress,
  };

  return (
    <WeightedScrollContext.Provider value={value}>
      {children}
    </WeightedScrollContext.Provider>
  );
}

/** Wraps content to apply subtle inertia: content lags slightly behind scroll for a "heavy" feel. */
function WeightedScrollLayer({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { scrollY, smoothScrollY } = useWeightedScroll();
  const lag = (scrollY - smoothScrollY) * 0.18;
  return (
    <div
      className={className}
      style={{
        transform: `translate3d(0, ${lag}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export { WeightedScrollLayer };

/** Parallax layer: moves at a different rate than scroll for depth. factor < 1 = slower (background), > 1 = faster (foreground). */
function ParallaxLayer({
  children,
  factor = 0.5,
  className = "",
}: {
  children: ReactNode;
  factor?: number;
  className?: string;
}) {
  const { smoothScrollY } = useWeightedScroll();
  const ref = useRef<HTMLDivElement>(null);
  const baseYRef = useRef(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    const rect = el.getBoundingClientRect();
    const docScroll = window.scrollY;
    baseYRef.current = rect.top + docScroll;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    const baseY = baseYRef.current;
    const diff = smoothScrollY - baseY;
    setOffsetY(diff * (1 - factor) * 0.25);
  }, [smoothScrollY, factor]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${offsetY}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

/** Subtle scale on scroll: content slightly scales based on scroll progress for a tactile feel. */
function ScrollScaleLayer({
  children,
  className = "",
  minScale = 0.98,
  maxScale = 1,
}: {
  children: ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
}) {
  const { scrollProgress } = useWeightedScroll();
  const scale =
    maxScale - (maxScale - minScale) * Math.min(1, scrollProgress * 1.2);

  return (
    <div
      className={className}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center top",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export {
  WeightedScrollProvider,
  useWeightedScroll,
  ParallaxLayer,
  ScrollScaleLayer,
};
