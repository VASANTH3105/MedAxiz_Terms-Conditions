import React from "react";
import Link from "next/link";
import { Activity } from "lucide-react";
import { APP_METADATA } from "@/lib/constants";

export default function Footer() {
  const currentYear = APP_METADATA.currentYear;

  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Data Deletion", href: "/data-deletion" },
  ];

  return (
    <footer className="w-full bg-slate-50 dark:bg-[#0a0a0d] border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Title */}
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <span className="font-semibold text-slate-800 dark:text-white">
              {APP_METADATA.name}
            </span>
            <span className="text-slate-400 dark:text-slate-500">|</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Smart Medication Reminders
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer Navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors focus:outline-none focus:underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-right">
            <span>&copy; {currentYear} {APP_METADATA.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
