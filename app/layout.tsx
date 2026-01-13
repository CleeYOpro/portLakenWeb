import type { Metadata } from "next";
import { Playfair_Display} from "next/font/google";

import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Port Laken - Community First",
  description: "For over a century, connecting residents, honoring our heritage, and embracing innovation to build a community where everyone belongs and thrives.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${nunitoSans.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
