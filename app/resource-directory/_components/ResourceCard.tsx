"use client";

import { Resource } from "../resources";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ResourceCardProps extends Resource {
    onClick: () => void;
}

export default function ResourceCard({
    name,
    category,
    shortDescription,
    image,
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
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Learn more pill — top right */}
                <div className="absolute top-3 right-3 z-20">
                    <span className="flex items-center gap-1 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-port-navy shadow-sm group-hover:bg-white transition-colors">
                        View <ArrowRight size={11} />
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                {/* Category pill */}
                <span className="self-start px-2.5 py-0.5 rounded-full bg-port-frost text-port-sky text-[11px] font-bold uppercase tracking-wider mb-2">
                    {category}
                </span>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-port-navy leading-snug mb-2">
                    {name}
                </h3>

                {/* Description */}
                <p className="text-port-slate text-sm leading-relaxed line-clamp-3 flex-grow">
                    {shortDescription}
                </p>
            </div>
        </motion.div>
    );
}
