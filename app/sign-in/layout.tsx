import Navbar from "../components/Navbar";
import { Suspense } from "react";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}