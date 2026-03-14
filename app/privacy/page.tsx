"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-to-br from-port-mist via-white to-port-mist/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <RevealOnScroll>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-port-navy tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-port-slate text-lg">
              City of Port Laken. Last updated: March 2026.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="prose prose-slate max-w-none space-y-10 text-port-slate">
            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Overview
                </h2>
                <p className="leading-relaxed">
                  This privacy policy describes how the City of Port Laken website collects, uses, and protects information when you visit or use our services. Port Laken is a fictional city and this site is for educational and demonstration purposes; the policy below explains our practices in that context.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Information We Collect
                </h2>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>Account data: If you create an account or sign in (email or Google), we store your email address and profile information in a secure database to provide account features, dashboards, and optional alerts or newsletters.</li>
                  <li>Contact form and email: If you send a message through our contact or email features, we receive and process the content you submit to respond or provide services.</li>
                  <li>Usage data: We may collect anonymized usage information (e.g., pages visited, general traffic) to improve the site and understand how it is used.</li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-2">
                  We use the information above to:
                </p>
                <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                  <li>Provide and maintain your account and preferences</li>
                  <li>Send you optional newsletters or emergency-style alerts if you have opted in</li>
                  <li>Respond to inquiries and contact requests</li>
                  <li>Improve the website and user experience</li>
                  <li>Comply with applicable law or protect our rights where necessary</li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Cookies and Similar Technologies
                </h2>
                <p className="leading-relaxed">
                  We may use cookies and similar technologies to keep you signed in, remember preferences, and analyze site traffic. You can adjust your browser settings to limit or block cookies; some features may not work fully if cookies are disabled.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Third-Party Services
                </h2>
                <p className="leading-relaxed mb-3">
                  Our site uses third-party services that may collect or process data. Their own privacy policies apply:
                </p>
                <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                  <li>Authentication and database: Firebase (Google). Used for sign-in and storing account and preference data.</li>
                  <li>Maps: Google Maps (embed and static maps). Google may collect data per its privacy policy when you interact with maps.</li>
                  <li>Email: Resend (or similar) for sending transactional and marketing emails.</li>
                  <li>Analytics: We may use analytics providers (e.g., Vercel Analytics) for anonymized usage statistics.</li>
                  <li>Hosting: The site may be hosted on platforms such as Netlify or Vercel, which may log requests and performance data.</li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Data Retention and Security
                </h2>
                <p className="leading-relaxed">
                  We retain your information for as long as needed to provide services and as required by law. We take reasonable steps to protect your data using industry-standard security practices; no system is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Your Choices
                </h2>
                <p className="leading-relaxed">
                  You may update or delete your account and preferences through your account or dashboard. You can unsubscribe from newsletters or alerts at any time using the links in those messages or your account settings. You may also contact us to request access to or deletion of your personal information, subject to applicable law.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Children
                </h2>
                <p className="leading-relaxed">
                  Our site is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can delete it.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the top will change when we do. Continued use of the site after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="font-display text-xl font-semibold text-port-navy mb-3">
                  Contact
                </h2>
                <p className="leading-relaxed">
                  For privacy-related questions or requests, contact the City of Port Laken at the address or email provided on our <Link href="/contact" className="text-port-sky hover:underline">contact page</Link>.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
