"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

interface RollingNumberProps {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export default function RollingNumber({
    value,
    label,
    prefix = "",
    suffix = "",
    decimals = 0,
}: RollingNumberProps) {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Visual display value
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovered) {
            // When NOT hovered, rapid cycle through random numbers
            // to create a "searching/scanning" data effect
            interval = setInterval(() => {
                // Random value between 0 and 2x the target to keep it dynamic
                // Or just random digits for a glitch effect
                const random = Math.random() * (value * 1.2);
                setDisplayValue(random);
            }, 50); // Fast update
        } else {
            // When hovered, snap to the actual value
            setDisplayValue(value);
        }

        return () => clearInterval(interval);
    }, [isHovered, value]);

    // Use framer motion spring to smooth the value transition for display
    // This helps when switching from "Random" to "Fixed" so it doesn't just jump instantly
    const springValue = useSpring(0, { stiffness: 50, damping: 15 });

    useEffect(() => {
        springValue.set(displayValue);
    }, [displayValue, springValue]);

    // Format the number helper
    const formatNumber = (num: number) => {
        // If we are mostly integer, fix to 0
        if (decimals === 0) {
            return Math.round(num).toLocaleString();
        }
        return num.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        });
    };

    return (
        <div
            className="group relative bg-white border border-port-mist rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-port-sky/50 hover:-translate-y-1 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            ref={containerRef}
        >
            {/* Background decoration */}
            <div className={`absolute inset-0 bg-gradient-to-br from-port-frost to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

            {/* Content */}
            <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-display font-bold text-port-navy mb-2 min-h-[3.5rem] flex items-center justify-center">
                    <span className="text-port-sky/50 mr-1 text-2xl md:text-3xl align-top">
                        {prefix}
                    </span>

                    <NumberDisplay
                        value={springValue}
                        format={formatNumber}
                        isHovered={isHovered}
                        target={value}
                    />

                    <span className="text-port-slate/50 ml-1 text-lg align-baseline font-sans font-medium">
                        {suffix}
                    </span>
                </div>

                <div className="h-px w-12 bg-port-mist mx-auto mb-4 group-hover:w-24 group-hover:bg-port-sky transition-all duration-300" />

                <p className="text-port-slate font-medium uppercase tracking-widest text-xs md:text-sm">
                    {label}
                </p>
            </div>

            {/* "Stop" hint that fades out on hover */}
            <div className={`absolute bottom-3 left-0 right-0 text-[10px] text-port-slate/40 uppercase tracking-widest transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                Hover or click
            </div>
        </div>
    );
}

// Sub-component to handle the motion value rendering
function NumberDisplay({ value, format, isHovered, target }: { value: any, format: (n: number) => string, isHovered: boolean, target: number }) {
    const [current, setCurrent] = useState("");

    useEffect(() => {
        return value.on("change", (latest: number) => {
            setCurrent(format(latest));
        });
    }, [value, format]);

    return (
        <span className={`${isHovered ? 'text-port-navy' : 'text-port-navy/70 blur-[0.5px]'} transition-all duration-300`}>
            {isHovered ? format(target) : current}
        </span>
    );
}
