'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DepartmentCardProps {
  title: string;
  description: string;
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
