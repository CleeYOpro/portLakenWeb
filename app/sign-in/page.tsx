import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero + Form */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-[55%_45%]">
        {/* Left hero */}
        <div className="relative hidden md:block">
          <Image
            src="/port-laken-bg.jpg"
            alt="Port Laken city skyline"
            fill
            priority
            sizes="55vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2f5f7a]/55" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />

          <div className="relative z-10 flex h-full flex-col justify-center px-16">
            <h1 className="max-w-[520px] font-serif text-[44px] leading-tight text-white drop-shadow">
              Welcome back to your<br />Port Laken account.
            </h1>
            <p className="mt-6 max-w-[520px] text-sm text-white/90 drop-shadow">
              Manage alerts, access resources, and stay connected with your city.
            </p>
          </div>
        </div>

        {/* Right form */}
        <div className="flex items-center justify-center px-6 sm:px-10">
          <form
            className="w-full max-w-[420px]"
            aria-label="Sign in to your account"
          >
            <h2 className="mb-8 text-2xl font-semibold text-[#2f3f4a]">
              Sign in
            </h2>

            {/* Email */}
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-[#2f3f4a]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="mt-2 h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 text-sm text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:ring-2 focus:ring-[#5a819a]/40"
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="mt-6 block text-xs font-semibold text-[#2f3f4a]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              className="mt-2 h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 text-sm text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:ring-2 focus:ring-[#5a819a]/40"
            />

            {/* Actions */}
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-[#2f3f4a]">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-[#6e8ea4] accent-[#5a819a]"
                />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-xs text-[#5a819a] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-7 h-[48px] w-full rounded-full bg-[#6d879c] text-sm font-semibold text-white shadow hover:bg-[#637f95] focus:outline-none focus:ring-2 focus:ring-[#5a819a]/50"
            >
              Sign in
            </button>

            {/* Footer */}
            <p className="mt-6 text-center text-xs text-[#6f7f8a]">
              Don&apos;t have an account?{" "}
              <Link
                href="/create-account"
                className="text-[#5a819a] hover:underline"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
