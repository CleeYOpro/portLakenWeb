import Image from "next/image";
import Link from "next/link";

const inputClass =
  "mt-2 h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 text-[13px] text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:border-[#5a819a]";

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-[96px]">
      <section className="h-[calc(100vh-96px)] w-full overflow-hidden">
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
              <h1 className="max-w-[560px] font-serif text-[52px] leading-[1.05] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Create your
                <br />
                Port Laken account.
              </h1>
              <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Get access to alerts, resources, forms, and updates
                <br />
                across the city.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="flex h-full w-full items-start justify-center bg-white px-10 pt-14 pb-[220px] md:px-16">
            <div className="w-full max-w-[560px]">
              <h2 className="mb-6 text-[14px] font-semibold text-[#2f3f4a]">
                Create Account
              </h2>

              {/* Name row */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className={inputClass}
                    autoComplete="given-name"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className={inputClass}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* DOB */}
              <div className="mt-6">
                <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  className={inputClass}
                  autoComplete="bday"
                />
              </div>

              {/* Email */}
              <div className="mt-6">
                <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  autoComplete="email"
                />
              </div>

              {/* Passwords */}
              <div className="mt-6">
                <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className={inputClass}
                  autoComplete="new-password"
                />
              </div>

              <div className="mt-6">
                <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className={inputClass}
                  autoComplete="new-password"
                />
              </div>

              <button className="mt-7 h-[48px] w-full rounded-full bg-[#6d879c] text-[13px] font-semibold text-white shadow-[0_10px_18px_rgba(0,0,0,0.12)] hover:bg-[#637f95]">
                Create Account
              </button>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#e2e7ec]" />
                <Link
                  href="/sign-in"
                  className="text-[11px] font-semibold text-[#5a819a] hover:underline"
                >
                  or sign in
                </Link>
                <div className="h-px flex-1 bg-[#e2e7ec]" />
              </div>

              <p className="mt-7 text-center text-[12px] text-[#6f7f8a]">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-[#5a819a] hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

