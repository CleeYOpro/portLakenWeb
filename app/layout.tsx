import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Port Laken - Community First",
  description: "For over a century, connecting residents, honoring our heritage, and embracing innovation to build a community where everyone belongs and thrives.",
  icons: {
    icon: '/pl.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:wght@400..900&display=swap"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="antialiased">
        <div id="google_translate_element" style={{ display: 'none' }} />
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
        <Analytics />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false
                }, 'google_translate_element');

                // Aggressively remove Google Translate banner and body offset
                function removeGoogleBanner() {
                  // Kill the iframe banner
                  var banner = document.querySelector('.goog-te-banner-frame');
                  if (banner) banner.remove();
                  // Kill the top offset on body
                  document.body.style.setProperty('top', '0', 'important');
                  document.body.style.setProperty('margin-top', '0', 'important');
                  document.body.style.setProperty('position', 'static', 'important');
                }

                // Run immediately and on any DOM/style mutation
                removeGoogleBanner();
                var observer = new MutationObserver(removeGoogleBanner);
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['style']
                });
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
