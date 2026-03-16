import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold text-port-navy mb-4">
          Get Involved
        </h1>
        <p className="text-lg text-port-slate mb-8">
          Join Port Laken&apos;s environmental initiatives and help build a greener city.
        </p>
        <Link
          href="/environmental"
          className="text-port-sky font-medium hover:underline"
        >
          ← Back to Environment
        </Link>
      </div>
    </div>
  );
}
