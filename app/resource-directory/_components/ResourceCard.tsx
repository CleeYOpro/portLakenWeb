"use client";

import { Resource } from "../resources";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from 'next/image';

interface ResourceCardProps extends Resource {
    onClick: () => void;
}

export default function ResourceCard({
    name,
    category,
    shortDescription,
    image,
    rating,
    onClick,
}: ResourceCardProps) {
    return (
        <motion.div
            layoutId={`card-${name}`}
            className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col border border-transparent hover:border-port-mist"
            onClick={onClick}
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden">
                {/* Title Overlay on Image - Visual Match */}
                <div className="absolute top-4 left-4 right-12 z-20">
                    <h3 className="text-lg font-medium text-white drop-shadow-md leading-tight">
                        {name}
                    </h3>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <p className="text-port-slate text-[15px] leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {shortDescription}
                </p>

                {/* Learn More Button - Visual Match */}
                <div>
                    <button className="px-6 py-2.5 rounded-full border border-port-slate/30 text-port-navy font-bold text-sm hover:bg-port-navy hover:text-white hover:border-transparent transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </motion.div>
    );
}