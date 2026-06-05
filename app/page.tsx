import React from "react";
import Link from "next/link";
import {
  Calendar,
  Bell,
  BarChart3,
  FileText,
  ShieldCheck,
  Fingerprint,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { APP_METADATA } from "@/lib/constants";

export default function HomePage() {
  const features = [
    {
      title: "Medication Scheduling",
      description: "Create and manage medication schedules with flexible timing options.",
      icon: Calendar,
      gradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Reminder Engine",
      description: "Reliable reminders powered by native Android scheduling.",
      icon: Bell,
      gradient: "from-teal-500/10 to-emerald-500/10",
    },
    {
      title: "Analytics Dashboard",
      description: "Track adherence and medication progress using visual insights.",
      icon: BarChart3,
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "PDF Reports",
      description: "Export medication adherence reports as professional PDF documents.",
      icon: FileText,
      gradient: "from-orange-500/10 to-red-500/10",
    },
    {
      title: "Privacy Focused",
      description: "All medication data remains on the user's device.",
      icon: ShieldCheck,
      gradient: "from-green-500/10 to-teal-500/10",
    },
    {
      title: "Secure Access",
      description: "Support for PIN protection and biometric authentication.",
      icon: Fingerprint,
      gradient: "from-indigo-500/10 to-blue-500/10",
    },
  ];

  const highlights = [
    { text: "Offline First", subtext: "No network required to manage schedules or receive alerts." },
    { text: "No User Accounts", subtext: "Start immediately. No email, password, or sign-up necessary." },
    { text: "Local Data Storage", subtext: "All schedule and history logs are saved encrypted in local SQLite." },
    { text: "No Cloud Dependency", subtext: "Zero syncing to external servers. Your data is yours alone." },
    { text: "Reliable Native Reminders", subtext: "Android AlarmManager ensures alerts wake your phone on time." },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-16 sm:px-6 lg:px-8 text-center relative">
        {/* Brand Banner */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="h-4 w-4" />
          <span>Local-First Health App</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
          <span className="block">{APP_METADATA.name}</span>
          <span className="block text-2xl sm:text-4xl font-semibold text-slate-600 dark:text-slate-400 mt-2">
            {APP_METADATA.tagline}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
          {APP_METADATA.description}
        </p>

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
          {/* Download on Google Play - Custom Premium Placeholder */}
          <Link
            href={APP_METADATA.playStoreUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-900 dark:border-slate-700 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {/* Custom Google Play Logo Icon */}
            <svg
              className="w-6 h-6 mr-3 text-white fill-current group-hover:scale-105 transition-transform"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.7-60.7 60.7-60.7 58 33.3c15.1 8.7 24.8 24.3 24.8 44.1 0 19.8-9.7 35.4-24.8 44zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
            </svg>
            <div className="text-left">
              <span className="block text-[10px] font-normal uppercase tracking-wider text-slate-300">Get it on</span>
              <span className="block text-sm font-semibold tracking-wide">Google Play</span>
            </div>
          </Link>

          <Link
            href="/privacy-policy"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-xl font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span>Privacy Policy</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="/terms-and-conditions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 rounded-xl font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span>Terms & Conditions</span>
          </Link>
        </div>

        {/* Feature Overview Graphic Placeholder */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/30 p-2 backdrop-blur-sm shadow-xl">
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 via-slate-50 to-primary/10 dark:from-primary/10 dark:via-slate-900 dark:to-teal-500/5 py-12 px-6 flex flex-col items-center justify-center border border-slate-100 dark:border-slate-800/40">
            <ShieldAlert className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-2">Smart Reminders Active</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Your medication data remains locally encrypted. Notifications bypass cloud delays to deliver direct to your screen.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50/50 dark:bg-slate-900/10 py-20 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Medication Management Made Simple
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Everything you need to stay on top of your prescriptions and health analytics, offline and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col p-6 bg-white dark:bg-[#12131a] rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:border-primary/40 dark:hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-primary mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why MedAxiz (Offline First Focus) */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
              Trust & Offline Integrity
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight sm:text-4xl">
              Why Choose MedAxiz?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Traditional medication trackers sync your private health schedules, logs, and sensitive medication history to remote cloud databases.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              MedAxiz works differently. We put control, privacy, and speed back in your hands by eliminating accounts and cloud databases altogether.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start p-4 bg-white dark:bg-[#12131a] rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow transition-shadow"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-primary stroke-[2.5]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.text}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
