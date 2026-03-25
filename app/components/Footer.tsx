"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaArrowRight,
  FaDirections
} from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext"; // Import the useAuth hook

export default function Footer() {
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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const { user, loading, signInWithGoogle } = useAuth(); // Get user info from auth context

  const handleSignInWithGoogle = async () => {
    if (!loading && !user) {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    }
  };

  return (
    <footer className="bg-[#708aa3] text-white py-20 lg:py-24 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:gap-24"
        >

          {/* Left Column: Logo & Main Nav */}
          <div className="flex flex-col items-start gap-10 lg:w-1/2">
          

            <div className="flex flex-col gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "Resources", href: "/resource-directory" },
                { name: "About", href: "/about" },
                { name: "News", href: "/news" },
                { name: "Calendar", href: "/events" },
              ].map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="group relative inline-block 
                      text-4xl 
                      sm:text-5xl 
                      md:text-6xl 
                      lg:text-[5rem] 
                      xl:text-[5.5rem]
                      font-[family-name:var(--font-playfair),serif] 
                      font-bold 
                      uppercase 
                      leading-[0.85] 
                      tracking-tight 
                      text-white/90 
                      hover:text-white 
                      transition-colors 
                      duration-300"
                  >
                    <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-500 inline-block">
                      {link.name}
                      <span className="ml-2 opacity-0 group-hover:opacity-100 inline-block transition-opacity duration-300">➚</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Account Section, Utils, Socials, Bottom */}
          <div className="flex flex-col h-full lg:w-1/3 gap-4 lg:min-h-[400px] w-full">

            {/* SVG Logo at the top */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-block cursor-pointer"
            >
              <Image
                src="/port-laken-logo.svg"
                alt="Port Laken Logo"
                width={216}
                height={72}
                className="w-auto h-auto max-w-full"
              />
            </motion.div>



            {/* Port Laken Account Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 text-white/70 py-3 border-b border-white/10 w-full"
            >
              {user ? (
               
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-medium">Port Laken welcomes you back, {user.displayName || user.email?.split('@')[0]}</h3>

                  <Link
                    href="/dashboard"
                    className="px-4 py-1.5 rounded-full border border-white/20
                              bg-transparent
                              text-white/70
                              flex items-center justify-center
                              transition-all duration-300
                              hover:bg-white hover:text-[#708aa3] w-full sm:w-auto text-center"
                  >
                    View your Port Laken Dashboard
                  </Link>
                </div>
              ) : (
                // Show sign in options if user is not logged in
                <>
                  <h3 className="text-lg font-medium">Get a Port Laken Account</h3>
                  <p className="text-sm max-w-full text-white/60">Access exclusive features and personalized services</p>

                  <div className="flex flex-col gap-2 w-full max-w-full">
                    <button
                        onClick={handleSignInWithGoogle}
                        disabled={loading}
                        className="px-4 py-1.5 rounded-full border border-white/20
                                bg-transparent
                                text-white/70
                                flex items-center justify-center
                                transition-all duration-300
                                hover:bg-white hover:text-[#708aa3] w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaGoogle className="mr-2" /> Sign in with Google
                      </button>

                    <Link
                      href="/sign-in"
                      className="px-4 py-1.5 rounded-full border border-white/20
                                bg-transparent
                                text-white/70
                                flex items-center justify-center
                                transition-all duration-300
                                hover:bg-white hover:text-[#708aa3] w-full"
                    >
                      Sign in with Email
                    </Link>
                  </div>
                </>
              )}
            </motion.div>

            {/* Utils */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 text-white/50 py-3 border-b border-white/10 w-full"
            >

              <div className="flex justify-between w-full">
                <span className="text-xs uppercase">Local time</span>
                <span className="text-xs text-white tabular-nums">4:12 PM PST</span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-xs uppercase">Address</span>
                <span className="text-xs text-white tabular-nums">12 Oceanview Blvd, Port Laken, WA 98362</span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-xs uppercase">City Hall Hours</span>
                <span className="text-xs text-white">Mon-Fri, 9 AM - 5 PM</span>
              </div>
            </motion.div>

            {/* Socials as Pills with Icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-1 mt-1 py-1 w-full flex-wrap"
            >
              {[
                { label: "Instagram", Icon: FaInstagram, href: "https://instagram.com/portlaken" },
                { label: "Facebook", Icon: FaFacebookF, href: "https://facebook.com/portlaken" },
                { label: "X", Icon: FaXTwitter, href: "https://twitter.com/portlaken" },
                { label: "Nextdoor", iconPath: "/logos/nextdoor-svgrepo-com.svg", href: "https://nextdoor.com/portlaken" },
                { label: "(360) 597-3322", Icon: FaPhone, href: "tel:+13605973322" },
                { label: "us@portlaken.gov", Icon: FaEnvelope, href: "mailto:us@portlaken.gov" }
              ].map(({ label, Icon, iconPath, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-2 py-1 rounded-full border border-white/20 bg-transparent text-white/70
      text-sm transition-all duration-300
      hover:bg-white hover:text-[#708aa3] w-auto group"
                >
                  {Icon ? (
                    <Icon className="w-3 h-3" />
                  ) : iconPath ? (
                    <Image
                      src={iconPath}
                      alt={label}
                      width={12}
                      height={12}
                      className="w-3 h-3 brightness-0 invert group-hover:brightness-0 group-hover:invert-0 transition-all duration-300"
                    />
                  ) : null}
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </motion.div>

            {/* Bottom */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-0.5 text-white/60 text-sm mt-2 w-full"
            >
              <div className="flex gap-3 pt-2 border-t border-white/10 w-full">
                <span>© 2026 City of Port Laken.</span>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/references">References</Link>
              </div>
            </motion.div>


          </div>

        </motion.div>
      </div>
    </footer>
  );
}