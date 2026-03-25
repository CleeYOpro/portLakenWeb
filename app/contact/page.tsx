"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

/* ── 3-D tilt wrapper ── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 260, damping: 28 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 260, damping: 28 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";
const NAVY = "#1E3A5F";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const socials = [
  { label: "Facebook", icon: "https://cdn.simpleicons.org/facebook/708AA3", href: "https://facebook.com/portlaken" },
  { label: "Instagram", icon: "https://cdn.simpleicons.org/instagram/708AA3", href: "https://instagram.com/portlaken" },
  { label: "X", icon: "https://cdn.simpleicons.org/x/708AA3", href: "https://x.com/portlaken" },
  { label: "YouTube", icon: "https://cdn.simpleicons.org/youtube/708AA3", href: "https://youtube.com/portlaken" },
  { label: "Nextdoor", icon: "https://cdn.simpleicons.org/nextdoor/708AA3", href: "https://nextdoor.com/agency/portlaken" },
];

const clerkServices = [
  { icon: "edit_document", title: "Elections and Voting", body: "Administering fair and transparent municipal elections for all eligible Port Laken residents." },
  { icon: "description", title: "Public Records", body: "Maintaining and providing access to official city documents, ordinances, and meeting minutes." },
  { icon: "gavel", title: "Legislative Support", body: "Supporting City Council proceedings with agendas, minutes, and legislative tracking." },
  { icon: "badge", title: "Business Licensing", body: "Processing business licenses, permits, and registrations for local enterprises." },
  { icon: "campaign", title: "Public Notices", body: "Publishing official city announcements, hearings, and legal notifications." },
  { icon: "folder_open", title: "Records Management", body: "Archiving and preserving historical city records for future generations." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-port-cream">

      {/* ══ HERO ══ */}
      <section className="pt-28 pb-16 bg-port-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl font-bold text-port-navy mb-4">
              Contact <span style={{ color: PRIMARY }}>Port Laken</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-port-slate/70 text-lg max-w-2xl mx-auto">
              Reach out to us online, by phone, or visit City Hall in person. We are here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ GENERAL CONTACT + MAP + SOCIALS ══ */}
      <section className="pb-20 bg-port-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Social media row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border text-sm font-semibold text-port-navy transition-all"
                style={{ borderColor: `${SHADE}70`, boxShadow: `0 2px 8px ${SHADE}30` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt={s.label} className="w-4 h-4" />
                {s.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Map + quick info side by side */}
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 rounded-2xl overflow-hidden border"
              style={{ borderColor: `${SHADE}60`, boxShadow: `0 4px 20px ${SHADE}30`, height: "320px" }}
            >
              <iframe
                title="Port Angeles City Hall"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.5!2d-123.44126!3d48.11815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f65b7d76b9c95%3A0xb4ea7a85078cd47e!2sPort%20Angeles%20City%20Hall!5e0!3m2!1sen!2sus!4v1711000000000!5m2!1sen!2sus"
              />
            </motion.div>

            {/* Quick contact info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="md:col-span-2 flex flex-col gap-3 justify-center"
            >
              {[
                { icon: "location_on", label: "Address", lines: ["312 Oceanview Blvd, Port Laken, WA 98362"] },
                { icon: "phone", label: "General Line", lines: ["(360) 417-4500"] },
                { icon: "mail", label: "General Email", lines: ["info@portlaken.gov"] },
                { icon: "schedule", label: "City Hall Hours", lines: ["Mon to Fri: 8:00 AM to 5:00 PM", "Closed weekends and holidays"] },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-xl px-4 py-3.5 border flex items-start gap-3"
                  style={{ borderColor: `${SHADE}50` }}
                >
                  <motion.span
                    className="material-symbols-outlined text-xl mt-0.5 flex-shrink-0"
                    style={{ color: PRIMARY }}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                  >
                    {item.icon}
                  </motion.span>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: PRIMARY }}>
                      {item.label}
                    </div>
                    {item.lines.map((l) => (
                      <div key={l} className="text-sm text-port-slate/70">{l}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact form */}
          <TiltCard>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl p-8 border"
              style={{ borderColor: `${SHADE}60`, boxShadow: `0 6px 28px ${SHADE}35` }}
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
                    className="material-symbols-outlined text-6xl mb-4"
                    style={{ color: PRIMARY }}
                  >
                    check_circle
                  </motion.span>
                  <h3 className="font-display text-2xl font-bold text-port-navy mb-2">Message Sent!</h3>
                  <p className="text-port-slate/65 text-sm mb-6">We will get back to you within 1 to 2 business days.</p>
                  <motion.button
                    onClick={() => setSubmitted(false)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2 rounded-xl text-sm font-semibold text-white"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <>
                    <h2 className="font-display text-xl font-bold text-port-navy mb-6">Send Us a Message</h2>
                  <form
                      className="grid sm:grid-cols-2 gap-4"
                      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: `${NAVY}70` }}>
                          Full Name <span style={{ color: PRIMARY }}>*</span>
                        </label>
                        <input
                          type="text" required placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all"
                          style={{ border: `1px solid ${SHADE}80` }}
                          onFocus={e => { e.currentTarget.style.borderColor = PRIMARY; e.currentTarget.style.boxShadow = `0 0 0 3px ${SHADE}40`; }}
                          onBlur={e => { e.currentTarget.style.borderColor = `${SHADE}80`; e.currentTarget.style.boxShadow = "none"; }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: `${NAVY}70` }}>
                          Email Address <span style={{ color: PRIMARY }}>*</span>
                        </label>
                        <input
                          type="email" required placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all"
                          style={{ border: `1px solid ${SHADE}80` }}
                          onFocus={e => { e.currentTarget.style.borderColor = PRIMARY; e.currentTarget.style.boxShadow = `0 0 0 3px ${SHADE}40`; }}
                          onBlur={e => { e.currentTarget.style.borderColor = `${SHADE}80`; e.currentTarget.style.boxShadow = "none"; }}
                        />
                    </div>

                      {/* Phone */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: `${NAVY}70` }}>
                        Phone Number
                      </label>
                      <input
                          type="tel" placeholder="(555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all"
                        style={{ border: `1px solid ${SHADE}80` }}
                          onFocus={e => { e.currentTarget.style.borderColor = PRIMARY; e.currentTarget.style.boxShadow = `0 0 0 3px ${SHADE}40`; }}
                          onBlur={e => { e.currentTarget.style.borderColor = `${SHADE}80`; e.currentTarget.style.boxShadow = "none"; }}
                      />
                    </div>

                      {/* Topic */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: `${NAVY}70` }}>
                          Topic
                        </label>
                        <select
                          className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy bg-port-cream outline-none transition-all"
                          style={{ border: `1px solid ${SHADE}80` }}
                          onFocus={e => { e.currentTarget.style.borderColor = PRIMARY; e.currentTarget.style.boxShadow = `0 0 0 3px ${SHADE}40`; }}
                          onBlur={e => { e.currentTarget.style.borderColor = `${SHADE}80`; e.currentTarget.style.boxShadow = "none"; }}
                        >
                          <option value="">Select a topic...</option>
                          <option>General Inquiry</option>
                          <option>Public Records Request</option>
                          <option>Business Licensing</option>
                          <option>Elections and Voting</option>
                          <option>City Council Matters</option>
                          <option>Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: `${NAVY}70` }}>
                        Message <span style={{ color: PRIMARY }}>*</span>
                      </label>
                      <textarea
                          required rows={5} placeholder="How can we help you?"
                        className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all resize-none"
                        style={{ border: `1px solid ${SHADE}80` }}
                          onFocus={e => { e.currentTarget.style.borderColor = PRIMARY; e.currentTarget.style.boxShadow = `0 0 0 3px ${SHADE}40`; }}
                          onBlur={e => { e.currentTarget.style.borderColor = `${SHADE}80`; e.currentTarget.style.boxShadow = "none"; }}
                      />
                    </div>

                      <div className="sm:col-span-2">
                        <motion.button
                      type="submit"
                          whileHover={{ scale: 1.03, y: -1, boxShadow: `0 8px 24px ${PRIMARY}50` }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white text-sm"
                          style={{ backgroundColor: PRIMARY }}
                    >
                          Send Message
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </motion.button>
                      </div>
                  </form>
                </>
              )}
            </motion.div>
          </TiltCard>
        </div>
      </section>

      {/* ══ DIVIDER ══ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px" style={{ backgroundColor: `${SHADE}60` }} />
      </div>

      {/* ══ CITY CLERK SECTION ══ */}
      <section className="py-20 bg-port-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2" style={{ color: PRIMARY }}>
              Department
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-port-navy mb-1">
              Contact the Clerk&apos;s Office
            </h2>
            <div className="mt-4 h-0.5 w-14 rounded-full" style={{ backgroundColor: SHADE }} />
          </motion.div>

          {/* Clerk contact info + about image */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">

            {/* Contact details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="bg-white rounded-2xl p-7 border flex flex-col gap-5"
              style={{ borderColor: `${SHADE}60`, boxShadow: `0 4px 20px ${SHADE}25` }}
            >
              <h3 className="font-bold text-port-navy text-base">Office Information</h3>
              {[
                { icon: "phone", label: "Direct Line", value: "(360) 417-4509" },
                { icon: "mail", label: "Email", value: "clerk@portlaken.gov" },
                { icon: "location_on", label: "Location", value: "City Hall, Room 105\n321 E 5th Street, Port Angeles, WA 98362" },
                { icon: "schedule", label: "Office Hours", value: "Mon to Fri: 8:00 AM to 5:00 PM\nClosed weekends and holidays" },
                { icon: "timer", label: "Records Turnaround", value: "Most requests fulfilled within 5 business days" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-3 cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${SHADE}25`, border: `1px solid ${SHADE}` }}
                  >
                    <span className="material-symbols-outlined text-base" style={{ color: PRIMARY }}>{item.icon}</span>
                  </motion.div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: PRIMARY }}>
                      {item.label}
                    </div>
                    <div className="text-sm text-port-slate/70 whitespace-pre-line">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* About image + blurb */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <motion.div
                className="relative h-52 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ boxShadow: `0 4px 20px ${SHADE}40` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800"
                  alt="City Clerk Office"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, rgba(30,58,95,0.45) 0%, transparent 60%)` }}
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg" style={{ color: PRIMARY }}>verified</span>
                  <div>
                    <div className="text-xs font-bold text-port-navy">Official Records Office</div>
                    <div className="text-xs text-port-slate/60">Est. 1952</div>
                  </div>
                </div>
              </motion.div>

              <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: `${SHADE}60` }}>
                <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: PRIMARY }}>
                  Our Mission
                </p>
                <p className="text-port-slate/70 text-sm leading-relaxed">
                  The City Clerk&apos;s Office is the foundation of open government in Port Laken, maintaining records,
                  administering elections, and ensuring every resident can access the information they need.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
          >
            {[
              { value: "50K+", label: "Records Managed" },
              { value: "12K", label: "Registered Voters" },
              { value: "800+", label: "Business Licenses" },
              { value: "24hr", label: "Online Access" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-2xl p-5 text-center border cursor-default"
                style={{ borderColor: `${SHADE}50` }}
              >
                <div className="text-3xl font-bold mb-1" style={{ color: PRIMARY }}>{s.value}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: `${NAVY}70` }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-1" style={{ color: PRIMARY }}>What We Do</p>
            <h3 className="font-display text-2xl font-bold text-port-navy">Clerk&apos;s Office Services</h3>
            <div className="mt-3 h-0.5 w-10 rounded-full" style={{ backgroundColor: SHADE }} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {clerkServices.map((svc, i) => (
              <TiltCard key={svc.title}>
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: `0 14px 36px ${SHADE}80` }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white rounded-2xl p-5 border transition-colors duration-200 cursor-default h-full"
                  style={{ borderColor: `${SHADE}55` }}
                >
                  <motion.span
                    className="material-symbols-outlined mb-3 block"
                    style={{ fontSize: "1.75rem", color: PRIMARY }}
                    whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.45 } }}
                  >
                    {svc.icon}
                  </motion.span>
                  <h4 className="font-bold text-port-navy text-sm mb-1.5">{svc.title}</h4>
                  <p className="text-port-slate/65 text-sm leading-relaxed">{svc.body}</p>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
