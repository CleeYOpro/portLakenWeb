"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const PRIMARY = "#708AA3";
const SHADE   = "#ABD1E6";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const contactInfo = [
  { icon: "location_on",  label: "Office Location", value: "100 Main Street\nPort Laken, CA 94000" },
  { icon: "phone",        label: "Phone",            value: "(555) 123-4567" },
  { icon: "mail",         label: "Email",            value: "clerk@portlaken.gov" },
  { icon: "schedule",     label: "Office Hours",     value: "Mon – Fri: 8:00 AM – 5:00 PM\nClosed weekends & holidays" },
];

const helpTopics = [
  "Public records requests",
  "Ordinance and regulation inquiries",
  "Meeting minutes and agendas",
  "Business license information",
  "City Council proceedings",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-port-cream">

      {/* ── HERO ── */}
      <section className="pt-28 pb-14 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/ordinances"
            className="inline-flex items-center gap-2 text-sm transition-colors mb-8"
            style={{ color: `${PRIMARY}80` }}
            onMouseEnter={e => (e.currentTarget.style.color = PRIMARY)}
            onMouseLeave={e => (e.currentTarget.style.color = `${PRIMARY}80`)}
          >
            <FaArrowLeft className="text-xs" /> Back to City Ordinances
          </Link>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: PRIMARY }}>
              City Clerk&apos;s Office
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-port-navy leading-tight mb-4">
              Here to <em style={{ color: PRIMARY }}>Help</em>
            </h1>
            <p className="text-port-slate/65 text-lg max-w-md">
              Reach out with questions about public records, ordinances, or city documentation.
            </p>
            <div className="mt-6 h-px max-w-xs" style={{ backgroundColor: SHADE }} />
          </motion.div>
        </div>
      </section>

      {/* ── MAIN SPLIT ── */}
      <section className="pb-20 bg-port-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT — Contact form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border"
              style={{ borderColor: `${SHADE}60` }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="material-symbols-outlined text-5xl mb-4" style={{ color: PRIMARY }}>
                    check_circle
                  </span>
                  <h3 className="font-display text-2xl font-bold text-port-navy mb-2">Message Sent</h3>
                  <p className="text-port-slate/65 text-sm">We&apos;ll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-bold text-port-navy mb-6">Send a Message</h2>
                  <form
                    className="space-y-4"
                    onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-port-slate/70 uppercase tracking-wider mb-1.5">
                          Full Name <span style={{ color: PRIMARY }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all"
                          style={{ border: `1px solid ${SHADE}80` }}
                          onFocus={e => (e.currentTarget.style.borderColor = PRIMARY)}
                          onBlur={e => (e.currentTarget.style.borderColor = `${SHADE}80`)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-port-slate/70 uppercase tracking-wider mb-1.5">
                          Email Address <span style={{ color: PRIMARY }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all"
                          style={{ border: `1px solid ${SHADE}80` }}
                          onFocus={e => (e.currentTarget.style.borderColor = PRIMARY)}
                          onBlur={e => (e.currentTarget.style.borderColor = `${SHADE}80`)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-port-slate/70 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all"
                        style={{ border: `1px solid ${SHADE}80` }}
                        onFocus={e => (e.currentTarget.style.borderColor = PRIMARY)}
                        onBlur={e => (e.currentTarget.style.borderColor = `${SHADE}80`)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-port-slate/70 uppercase tracking-wider mb-1.5">
                        Message <span style={{ color: PRIMARY }}>*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-2.5 rounded-xl text-sm text-port-navy placeholder-port-slate/35 bg-port-cream outline-none transition-all resize-none"
                        style={{ border: `1px solid ${SHADE}80` }}
                        onFocus={e => (e.currentTarget.style.borderColor = PRIMARY)}
                        onBlur={e => (e.currentTarget.style.borderColor = `${SHADE}80`)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white text-sm transition-all"
                      style={{ backgroundColor: PRIMARY }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a7389")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
                    >
                      Send message
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* RIGHT — Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {/* Contact details */}
              <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: `${SHADE}60` }}>
                <h2 className="font-display text-xl font-bold text-port-navy mb-6">Contact Details</h2>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${SHADE}30`, border: `1px solid ${SHADE}` }}
                      >
                        <span className="material-symbols-outlined text-base" style={{ color: PRIMARY }}>
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: PRIMARY }}>
                          {item.label}
                        </div>
                        <div className="text-port-slate/70 text-sm leading-relaxed whitespace-pre-line">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How we can help */}
              <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: `${SHADE}60` }}>
                <h2 className="font-display text-xl font-bold text-port-navy mb-4">How We Can Help</h2>
                <ul className="space-y-2.5">
                  {helpTopics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm text-port-slate/70">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: PRIMARY }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
