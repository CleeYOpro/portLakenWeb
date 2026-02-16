"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* =====================
   DATA

const departments = [
  {
    title: "City Clerk",
    icon: "edit_document",
    description: "Official records, elections, and public information.",
    url: "/under-construction",
  },
  {
    title: "Community Development",
    icon: "apartment",
    description: "Planning, zoning, and building permits.",
    url: "/under-construction",
  },
  {
    title: "Fire Department",
    icon: "local_fire_department",
    description: "Emergency response and fire prevention services.",
    url: "/under-construction",
  },
  {
    title: "Police Department",
    icon: "policy",
    description: "Public safety and law enforcement.",
    url: "/under-construction",
  },
  {
    title: "Public Works",
    icon: "build",
    description: "Infrastructure, streets, and sanitation.",
    url: "/under-construction",
  },
  {
    title: "Recreation & Parks",
    icon: "park",
    description: "Parks, trails, and community programs.",
    url: "/environmental",
  },
  {
    title: "Finance",
    icon: "payments",
    description: "Budgeting, accounting, and financial services.",
    url: "/under-construction",
  },
  {
    title: "Human Resources",
    icon: "groups",
    description: "Employment, benefits, and workforce support.",
    url: "/under-construction",
  },
];

/* =====================
   FLIP CARD
===================== */

interface DepartmentCardProps {
  dept: {
    title: string;
    icon: string;
    description: string;
    url: string;
  };
}

function DepartmentCard({ dept }: DepartmentCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-52 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full preserve-3d"
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl shadow-md flex items-center justify-center backface-hidden" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
          <span className="material-symbols-outlined text-white" style={{ fontSize: '10rem' }}>
            {dept.icon}
          </span>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl shadow-md px-6 py-8 text-center flex flex-col justify-center backface-hidden rotate-y-180" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
          <h3 className="text-lg font-bold text-port-cream mb-3">
            {dept.title}
          </h3>
          <p className="text-sm text-port-cream/80 mb-6">
            {dept.description}
          </p>
          <a
            href={dept.url}
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

/* =====================
   PAGE
===================== */

export default function DepartmentsPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-32 bg-gradient-to-b from-port-mist to-port-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl font-bold text-port-navy mb-4"
          >
            City Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-port-slate max-w-2xl"
          >
            Learn more about the departments that serve Port Laken.
          </motion.p>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-20 bg-port-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {departments.map((dept, index) => (
              <motion.div key={dept.title} variants={itemVariants}>
                <DepartmentCard dept={dept} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEPARTMENTS IN ACTION */}
      <section className="py-20 bg-port-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl font-display font-bold mb-12 text-center"
          >
            Departments in Action
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "local_fire_department",
                text: "Rapid emergency response and fire prevention efforts.",
                image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800",
              },
              {
                icon: "policy",
                text: "Community-centered public safety programs.",
                image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80&w=800",
              },
              {
                icon: "park",
                text: "Maintaining parks, trails, and public spaces.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
              },
            ].map((item, index) => (
              <motion.div
                key={item.icon}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={index === 0 ? slideInLeft : index === 2 ? slideInRight : fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* Photo */}
                <motion.div
                  className="relative h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="material-symbols-outlined text-white text-6xl absolute bottom-4 left-1/2 -translate-x-1/2"
                  >
                    {item.icon}
                  </motion.span>
                </motion.div>
                {/* Text */}
                <div className="p-6 text-center">
                  <p className="text-white/80 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE SERVE YOU */}
      <section className="py-20 bg-port-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl font-display font-bold text-port-navy mb-6"
          >
            How We Serve You
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-port-slate max-w-2xl mb-12"
          >
            Our departments collaborate to provide reliable, accessible services
            for all residents.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "recycling",
                title: "Sustainable Infrastructure",
                text: "Building systems that last for generations.",
              },
              {
                icon: "sos",
                title: "Community Safety",
                text: "Prepared, responsive, and resident-focused.",
              },
              {
                icon: "groups",
                title: "Resident Support",
                text: "Services designed around community needs.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(30, 58, 95, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl border border-port-mist shadow-sm p-8 text-center"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 150 }}
                  className="material-symbols-outlined text-port-sky text-5xl mb-4 block"
                >
                  {item.icon}
                </motion.span>
                <h4 className="font-bold text-port-navy mb-3">
                  {item.title}
                </h4>
                <p className="text-port-slate leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
