'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import { Eye, EyeOff } from 'lucide-react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
            <h1 className="max-w-[520px] font-serif text-[44px] leading-tight text-white drop-shadow font-bold">
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
            <div className="md:hidden text-center mb-2">
              <h1 className="font-serif text-3xl font-bold text-[#2f3f4a]">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-[#6f7f8a]">
                Manage alerts, submit resources, stay connected.
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
            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 pr-12 text-sm text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:ring-2 focus:ring-[#5a819a]/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9aa9b4] hover:text-[#5a819a] transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

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
              className="mt-6 h-[48px] w-full rounded-full bg-white text-sm font-semibold text-[#2f3f4a] border border-[#6e8ea4] shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5a819a]/50 flex items-center justify-center gap-2"
            >
              <svg width="22" height="22" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.46 3.09 29.5 1 24 1 14.82 1 7.07 6.48 3.64 14.22l7.1 5.52C12.4 13.67 17.73 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.74H24v8.98h12.67c-.55 2.94-2.2 5.43-4.68 7.1l7.18 5.58C43.36 37.27 46.52 31.36 46.52 24.5z"/>
                <path fill="#FBBC05" d="M10.74 28.26A14.6 14.6 0 0 1 9.5 24c0-1.48.25-2.91.74-4.26l-7.1-5.52A23.93 23.93 0 0 0 0 24c0 3.87.93 7.53 2.56 10.76l8.18-6.5z"/>
                <path fill="#34A853" d="M24 47c5.5 0 10.12-1.82 13.49-4.94l-7.18-5.58c-1.82 1.22-4.15 1.94-6.31 1.94-6.27 0-11.6-4.17-13.26-9.74l-8.18 6.5C7.07 41.52 14.82 47 24 47z"/>
              </svg>
              Continue with Google
            </button>

            {/* TSA Judge quick login */}
            <button
              type="button"
              onClick={() => { setEmail('judge@tsa.org'); setPassword('webmaster123'); }}
              className="mt-3 h-[48px] w-full rounded-full bg-white text-sm font-semibold text-[#2f3f4a] border border-[#6e8ea4] shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5a819a]/50 flex items-center justify-center gap-2"
            >
              <Image src="/tsa-logo.svg" alt="TSA" width={30} height={18} />
              Sign in as TSA Judge
            </button>
            <p className="mt-1.5 text-center text-xs text-[#6f7f8a]">
              Hello, judges! Use this to sign in without sharing personal info.
            </p>

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