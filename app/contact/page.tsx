import React from "react";
import { Metadata } from "next";
import { Mail, MessageSquare, ShieldCheck, HeartHandshake, ChevronRight } from "lucide-react";
import { APP_METADATA } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support & Contact",
  description: "Contact the MedAxiz support team for application assistance, privacy questions, terms agreements, or general feedback.",
};

export default function ContactPage() {
  const supportEmail = APP_METADATA.supportEmail;

  return (
    <div className="relative overflow-hidden flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white dark:bg-[#12131a] rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-primary to-blue-600 px-6 py-10 sm:px-10 text-white text-center sm:text-left relative">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <HeartHandshake className="h-24 w-24" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-3">
              Help Desk
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight">
              MedAxiz Support
            </h1>
            <p className="mt-2 text-blue-100 text-sm sm:text-base max-w-md">
              We&apos;re here to assist you. Get in touch with us regarding medication schedules, privacy policies, terms of use, or bug reports.
            </p>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              For questions regarding MedAxiz, privacy, terms, or general application support, please contact us. Because we do not run cloud tracking servers or gather metrics, providing details about your device type helps us troubleshoot issues.
            </p>

            {/* Support Options List */}
            <div className="space-y-4">
              {/* Option: Email */}
              <a
                href={`mailto:${supportEmail}`}
                className="group flex items-center justify-between p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/30 bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      Email Support
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {supportEmail}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Info Detail Block: Privacy Guarantee */}
              <div className="flex items-start p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10 text-teal-800 dark:text-teal-400">
                <ShieldCheck className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                <div className="text-sm leading-relaxed">
                  <span className="font-semibold block mb-0.5">Privacy First Verification</span>
                  We do not ask for, log, or request access to your medication schedule details. Never send sensitive medical data, dosages, or personal prescriptions over email.
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="pt-4 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors focus:outline-none focus:underline"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>Return to Home Page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
