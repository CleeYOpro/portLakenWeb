import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    // pt-[96px] reserves space if your navbar is fixed/sticky and overlaps content.
    // If your navbar is NOT fixed, set pt-0.
    <main className="min-h-screen bg-white pt-[96px]">
      <section className="h-[calc(100vh-96px)] w-full">
        <div className="grid h-full w-full grid-cols-1 md:grid-cols-[55%_45%]">
          {/* Left hero */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0">
              <Image
                src="/port-laken-bg.jpg"
                alt="City background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#2f5f7a]/55" />
              <div className="absolute inset-0 backdrop-blur-[1px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-center px-10 md:px-16">
              <h1 className="max-w-[520px] font-serif text-[52px] leading-[1.05] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Welcome back to your
                <br />
                Port Laken account.
              </h1>
              <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Manage alerts, access resources, and stay
                <br />
                connected with your city.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="flex h-full w-full items-start justify-center bg-white px-10 pt-16 md:px-16">
            <div className="w-full max-w-[560px]">
              <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 text-[13px] text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:border-[#5a819a]"
              />

              <label className="mt-6 block text-[12px] font-semibold text-[#2f3f4a]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 text-[13px] text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:border-[#5a819a]"
              />

              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2 text-[12px] text-[#2f3f4a]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#6e8ea4] accent-[#5a819a]"
                  />
                  Remember Me
                </label>

                <Link
                  href="#"
                  className="text-[12px] text-[#5a819a] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button className="mt-7 h-[48px] w-full rounded-full bg-[#6d879c] text-[13px] font-semibold text-white shadow-[0_10px_18px_rgba(0,0,0,0.12)] hover:bg-[#637f95]">
                Sign In
              </button>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#e2e7ec]" />
                <span className="text-[11px] text-[#8a98a3]">
                  or continue with
                </span>
                <div className="h-px flex-1 bg-[#e2e7ec]" />
              </div>

              <button className="mt-6 flex h-[48px] w-full items-center justify-center gap-3 rounded-full border border-[#c8d3dc] bg-white text-[13px] font-semibold text-[#5a6b77] hover:bg-[#f7f9fb]">
                <GoogleG />
                Continue with Google
              </button>

              <p className="mt-7 text-center text-[12px] text-[#6f7f8a]">
                Don&apos;t have an account?{" "}
                <Link href="/create-account" className="text-[#5a819a] hover:underline">
                Create one
                </Link>

              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GoogleG() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full">
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3C33.7 32.1 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.7 6.7 29.1 5 24 5 13.4 5 5 13.4 5 24s8.4 19 19 19 19-8.4 19-19c0-1.2-.1-2.3-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.7 6.7 29.1 5 24 5c-7.3 0-13.7 4.1-17.7 9.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 43c5.1 0 9.8-2 13.3-5.2l-6.1-5.2C29.4 34.3 26.9 35 24 35c-5.2 0-9.6-3-11.7-7.3l-6.6 5.1C9.6 39 16.3 43 24 43z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-3 5-5.7 6.6l6.1 5.2C38.2 37.7 43 33 43 24c0-1.2-.1-2.3-.4-3.5z"
        />
      </svg>
    </span>
  );
}
