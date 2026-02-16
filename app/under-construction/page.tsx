"use client";

import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-port-cream flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-port-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-port-green/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Icon & Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl mb-4 animate-bounce-slow">
            <Construction className="w-12 h-12 text-primary" />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-port-navy">
            Building the Future
          </h1>
          <p className="text-xl text-port-slate leading-relaxed max-w-lg mx-auto">
            This page is currently under construction as we enhance the Port Laken experience. Please check back soon!
          </p>
        </div>

        {/* Action Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-nunito font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-md hover:shadow-lg group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Return Home
        </Link>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-port-slate/60 font-nunito">
          Port Laken © {new Date().getFullYear()}
        </p>
      </div>

    </div>
  );
}
