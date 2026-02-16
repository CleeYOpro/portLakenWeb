import Link from "next/link";
import { IconType } from "react-icons";
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: IconType;
  href: string;
}

export default function DepartmentCard({ title, description, icon: Icon, href }: DepartmentCardProps) {
  return (
    <Link href={href} className="block department-card">
      <div className="relative aspect-square bg-[#8a9bb5] rounded-2xl cursor-pointer group overflow-hidden flex flex-col items-center justify-center p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(107,155,195,0.5)] hover:bg-[#7a8eaa] hover:scale-[1.03]">
        {/* Spotlight glow overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.15)_0%,transparent_70%)]" />

        {/* Icon */}
        <div className="relative z-10 mb-4">
          <Icon className="text-white text-7xl md:text-8xl drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500" />
        </div>

        {/* Title - appears on hover */}
        <div className="relative z-10 text-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
          <h3 className="font-bold text-lg text-white drop-shadow-md">{title}</h3>
          <p className="text-white/70 text-xs mt-1">{description}</p>
        </div>
      </div>
    </Link>
  icon: string;
  url: string;
}

export default function DepartmentCard({
  title,
  description,
  icon,
  url,
}: DepartmentCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-56 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full preserve-3d"
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl shadow-sm flex items-center justify-center backface-hidden" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
          <span className="material-symbols-outlined text-white" style={{ fontSize: '10rem' }}>
            {icon}
          </span>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl shadow-sm px-6 py-8 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
          <h3 className="font-bold text-lg text-port-cream mb-3">
            {title}
          </h3>
          <p className="text-sm text-port-cream/80 mb-6">
            {description}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center rounded-full bg-port-cream text-port-navy font-medium px-5 py-2 text-sm hover:bg-white transition"
          >
            Visit Department
          </a>
        </div>
      </motion.div>
    </div>
  );
}
