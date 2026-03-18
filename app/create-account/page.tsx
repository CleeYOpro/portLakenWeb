'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const inputClass =
  "mt-2 h-[46px] w-full rounded-full border border-[#6e8ea4] bg-white px-6 text-[13px] text-[#2f3f4a] placeholder:text-[#9aa9b4] outline-none focus:border-[#5a819a]";

export default function Page() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subscribe, setSubscribe] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signUp, signInWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password, `${firstName} ${lastName}`.trim(), subscribe);
      // After successful signup, redirect to dashboard or sign-in
      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      console.error('Sign up error:', err);
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      console.error('Google sign up error:', err);
      setError(err.message || 'Failed to create account with Google');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="h-screen w-full overflow-y-auto">
        <div className="grid min-h-full w-full grid-cols-1 md:grid-cols-[55%_45%]">
          {/* Left hero - Hidden on mobile */}
          <div className="relative hidden h-full w-full md:block">
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
                PL account.
              </h1>
              <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Get access to alerts, resources, forms, and updates
                <br />
                across the city.
              </p>
            </div>
          </div>

          {/* Right form - Full width on mobile */}
          <div className="flex h-full w-full items-start justify-center bg-white px-4 pt-20 pb-10 md:px-16 md:pt-14 md:pb-[220px]">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[560px]"
            >
              <div className="text-center mb-12">

              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded">
                  {error}
                </div>
              )}

              {/* Name row */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className={inputClass}
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className={inputClass}
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mt-6">
                <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                  autoComplete="email"
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className={inputClass}
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-[12px] font-semibold text-[#2f3f4a]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className={inputClass}
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="mt-4 flex items-center">
                <input
                  id="subscribe"
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                  className="h-4 w-4 rounded border-[#6e8ea4] text-[#5a819a] focus:ring-[#5a819a]"
                />
                <label htmlFor="subscribe" className="ml-2 block text-sm text-[#2f3f4a]">
                  Subscribe to Port Laken newsletter
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-7 h-[48px] w-full rounded-full text-[13px] font-semibold text-white shadow-[0_10px_18px_rgba(0,0,0,0.12)] ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#6d879c] hover:bg-[#637f95]'
                  }`}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* Or divider */}
              <div className="mt-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-xs text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Google Sign Up */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className="mt-6 h-[48px] w-full rounded-full bg-white text-sm font-semibold text-[#2f3f4a] border border-[#6e8ea4] shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5a819a]/50"
              >
                Sign up with Google
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
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}