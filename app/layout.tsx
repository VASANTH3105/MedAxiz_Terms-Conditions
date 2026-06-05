import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MedAxiz – Smart Medication Reminders",
    template: "%s | MedAxiz",
  },
  description: "Offline-first medication reminder application with scheduling, analytics, reports, and privacy-focused design.",
  keywords: ["medication reminder", "pill tracker", "offline medication app", "healthcare reminder", "medication schedule"],
  authors: [{ name: "MedAxiz" }],
  metadataBase: new URL("https://medaxiz.app"), // Default fallback domain
  openGraph: {
    title: "MedAxiz – Smart Medication Reminders",
    description: "Offline-first medication reminder application with scheduling, analytics, reports, and privacy-focused design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0d0e12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
