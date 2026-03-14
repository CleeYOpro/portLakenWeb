'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'; // Default to dashboard if no callback
  const { signIn, signInWithGoogle } = useFirebaseAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      // Redirect to the original destination or default after successful login
      router.push(callbackUrl);
      router.refresh(); // Refresh to update UI based on auth state
    } catch (err: any) {
      console.error('Sign in error:', err);
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push(callbackUrl);
      router.refresh();
    } catch (err: any) {
      console.error('Google sign in error:', err);
      setError(err.message || 'Failed to sign in with Google');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero + Form */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-[55%_45%]">
        {/* Left hero - Hidden on mobile */}
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
              Welcome back to your<br />PL account.
            </h1>
            <p className="mt-6 max-w-[520px] text-sm text-white/90 drop-shadow">
              Manage alerts, access resources, and stay connected with your city.
            </p>
          </div>
        </div>

        {/* Right form - Full width on mobile */}
        <div className="flex items-center justify-center px-4 sm:px-10 py-12 md:py-0">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[560px]"
            aria-label="Sign in to your account"
          >
            <div className="md:hidden text-center mb-6">
              <h1 className="font-serif text-3xl font-bold text-[#2f3f4a]">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-[#6f7f8a]">
                Manage alerts, access resources, and stay connected with your city.
              </p>
            </div>

            <h2 className="mb-8 text-2xl font-semibold text-[#2f3f4a]">
              Sign in
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded">
                {error}
              </div>
            )}

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 text-sm text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:ring-2 focus:ring-[#5a819a]/40"
            />

            {/* Actions */}
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-[#2f3f4a]">
                <input
                  type="checkbox"
                  name="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
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
              disabled={loading}
              className={`mt-7 h-[48px] w-full rounded-full text-sm font-semibold text-white shadow focus:outline-none focus:ring-2 focus:ring-[#5a819a]/50 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#6d879c] hover:bg-[#637f95]'
                }`}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            {/* Or divider */}
            <div className="mt-6 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-xs text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="mt-6 h-[48px] w-full rounded-full bg-white text-sm font-semibold text-[#2f3f4a] border border-[#6e8ea4] shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5a819a]/50"
            >
              Continue with Google
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