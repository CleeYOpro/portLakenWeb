import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Port Laken",
  description:
    "How the Port Laken website collects, uses, stores, and shares information.",
};

const sections = [
  {
    title: "What this page covers",
    body: [
      "This Privacy Policy explains how the Port Laken website collects, uses, stores, and shares information when you browse the site, create an account, submit a form, or interact with features such as maps, alerts, and email communications.",
      "Port Laken is a fictional city project created for educational and portfolio purposes. Even so, the site includes real web technologies and account features, so this policy describes how information is handled within that project environment.",
    ],
  },
  {
    title: "Information we collect",
    list: [
      "Account information such as your email address, password-authenticated account, display name, and Google profile details if you choose Google sign-in.",
      "Profile and preference data stored with your account, including newsletter subscription status, alert preferences, and basic interface preferences.",
      "Messages or content you submit through contact or email-related features.",
      "Technical and usage data such as pages visited, approximate traffic patterns, device or browser information, and performance metrics collected through analytics or hosting tools.",
      "Location-related request data when you use embedded or static map features.",
    ],
  },
  {
    title: "How we use information",
    list: [
      "To create and maintain user accounts.",
      "To authenticate sign-ins and manage session-related features.",
      "To store dashboard settings, communication preferences, and account records.",
      "To send transactional messages such as verification emails and requested communications.",
      "To send newsletters or emergency-style alerts when a user has opted in.",
      "To improve the site, understand feature usage, and monitor reliability.",
      "To protect the site, enforce policies, and comply with legal obligations where required.",
    ],
  },
  {
    title: "Services and vendors used on this site",
    list: [
      "Firebase Authentication is used for email/password sign-in, Google sign-in, and email verification workflows.",
      "Cloud Firestore is used to store account records and preference data tied to user accounts.",
      "Google services may process data when you use Google sign-in or interact with embedded or static map content.",
      "Resend or comparable email infrastructure may be used to deliver transactional messages, newsletters, or alert-style emails.",
      "Vercel Analytics may collect aggregated usage information for traffic and performance measurement.",
      "Hosting providers such as Vercel or Netlify may log request, device, and performance metadata needed to operate the site.",
    ],
  },
  {
    title: "Cookies and similar technologies",
    body: [
      "The site may use cookies, local browser storage, and similar technologies to support authentication, maintain preferences, measure usage, and keep core features working properly.",
      "You can limit cookies in your browser settings, but some sign-in, personalization, or embedded content features may not function correctly if you do.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "We keep information for as long as reasonably necessary to operate the site, maintain accounts, deliver requested services, resolve disputes, and meet legal or administrative obligations.",
      "If you request deletion of your account, we may remove or anonymize associated information except where retention is reasonably necessary for security, fraud prevention, recordkeeping, or legal compliance.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable administrative, technical, and organizational measures to protect information from unauthorized access, loss, misuse, or disclosure. That said, no website or online service can guarantee absolute security.",
    ],
  },
  {
    title: "Your choices",
    list: [
      "You can choose whether to create an account.",
      "You can unsubscribe from newsletters or similar communications.",
      "You can update account details and communication preferences through your account features when available.",
      "You can contact the site to request access, correction, or deletion, subject to technical and legal limitations.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "This site is not intended for children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has submitted personal information, contact us so we can review and remove it where appropriate.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, the effective date on this page will change. Continued use of the site after an update means the revised policy applies going forward.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-port-navy pt-28 pb-18">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-port-sky blur-3xl" />
          <div className="absolute bottom-[-4rem] right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-port-mist/80">
              Legal
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-port-mist/90 sm:text-xl">
              How information is collected, used, and protected across the Port
              Laken website and account features.
            </p>
            <p className="mt-6 text-sm text-port-mist/75">
              Effective date: March 18, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-port-frost/40 py-12 lg:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-12">
          <div className="space-y-6 rounded-[2rem] border border-port-mist/40 bg-white p-7 shadow-[0_24px_80px_rgba(50,66,79,0.08)] sm:p-9 lg:p-10">
            <div className="rounded-2xl border border-port-mist/40 bg-port-frost/70 p-5">
              <p className="text-sm leading-7 text-port-slate">
                This page is written to match the current features of the Port
                Laken app, including account creation, Google sign-in, Firestore
                profile storage, map embeds, analytics, and email delivery.
              </p>
            </div>

            {sections.map((section) => (
              <article
                key={section.title}
                className="border-b border-port-mist/30 pb-6 last:border-b-0 last:pb-0"
              >
                <h2 className="font-display text-2xl font-semibold text-port-navy">
                  {section.title}
                </h2>

                {section.body ? (
                  <div className="mt-4 space-y-4 text-base leading-8 text-port-slate">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.list ? (
                  <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-port-slate marker:text-port-sky list-disc">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}

            <article>
              <h2 className="font-display text-2xl font-semibold text-port-navy">
                Contact
              </h2>
              <p className="mt-4 text-base leading-8 text-port-slate">
                Questions about this policy can be directed through the{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-port-sky transition-colors hover:text-port-navy"
                >
                  contact page
                </Link>
                . You can also review supporting project context on the{" "}
                <Link
                  href="/references"
                  className="font-semibold text-port-sky transition-colors hover:text-port-navy"
                >
                  references page
                </Link>
                .
              </p>
            </article>
          </div>

          <aside className="h-fit rounded-[1.75rem] border border-port-mist/40 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-semibold text-port-navy">
              Quick Summary
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-port-slate">
              <p>
                Account data is used for sign-in, preferences, newsletters, and
                alert-style communications.
              </p>
              <p>
                Third-party tools used by the app may process some information,
                including Firebase, Google services, analytics, email delivery,
                and hosting infrastructure.
              </p>
              <p>
                Users can manage subscriptions and request account changes
                through available account features or by contacting the site.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
