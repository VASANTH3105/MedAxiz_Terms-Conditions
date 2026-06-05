import React from "react";
import { Metadata } from "next";
import { Trash2, AlertTriangle, ShieldCheck, Calendar, RefreshCw, Settings, Info } from "lucide-react";
import { APP_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description: "Learn how to delete your MedAxiz medication data, schedules, and analytics logs from your device.",
};

export default function DataDeletionPage() {
  const deletedItems = [
    "Profile information",
    "Medication records",
    "Schedules & reminders",
    "Reminder history",
    "Analytics data",
    "Generated report metadata",
    "Application preferences",
  ];

  return (
    <div className="relative overflow-hidden flex-grow py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        {/* Header Block */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
          <div className="flex items-center space-x-3 text-red-500 dark:text-red-400 mb-3">
            <Trash2 className="h-8 w-8 stroke-[2]" />
            <span className="font-semibold text-sm uppercase tracking-wider">User Rights & Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Data Deletion Instructions
          </h1>
          <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mt-3">
            <Calendar className="h-4 w-4" />
            <span>Last Updated: June 2026</span>
          </div>
        </div>

        {/* Section 1: Data Deletion Policy */}
        <div className="space-y-10">
          <section className="bg-white dark:bg-[#12131a] rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              {APP_METADATA.name} Data Privacy Policy
            </h2>
            <div className="text-slate-600 dark:text-slate-400 text-sm sm:text-base space-y-4 leading-relaxed">
              <p>
                {APP_METADATA.name} is built on a <strong>local-first architecture</strong> designed to protect user privacy. Your private records—including profile information, medicine names, scheduling logs, history, and generated reports—remain exclusively on your physical mobile device.
              </p>
              <div className="flex items-start p-4 rounded-xl bg-primary/5 border border-primary/10 text-primary mt-4">
                <ShieldCheck className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  We do not run cloud database sync servers, we do not require user accounts, and we do not store your private information on external databases.
                </span>
              </div>
            </div>
          </section>

          {/* Section 2: How to Delete Data */}
          <section className="bg-white dark:bg-[#12131a] rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              How to Delete Your Data
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
              You have complete ownership and control over your data. You can permanently wipe all {APP_METADATA.name} information from your device at any time using either of these methods:
            </p>

            <div className="space-y-6">
              {/* Method A */}
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-[#0d0e12]" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Method A: Through App Settings (Recommended)</h3>
                <ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Open <strong>{APP_METADATA.name}</strong> on your mobile device.</li>
                  <li>Navigate to <strong>Settings</strong> from the dashboard navigation menu.</li>
                  <li>Select the <strong>Data & Privacy</strong> option.</li>
                  <li>Tap the <strong>Delete All Data</strong> button.</li>
                  <li>Confirm the deletion request when prompted.</li>
                </ol>
              </div>

              {/* Method B */}
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-[#0d0e12]" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Method B: Clearing App Data or Uninstalling</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Alternatively, clearing the application cache and storage or uninstalling {APP_METADATA.name} from your device will instruct the operating system to permanently erase the local database files containing all your logging records.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: What Happens When Data Is Deleted */}
          <section className="bg-white dark:bg-[#12131a] rounded-2xl border border-red-200/40 dark:border-red-900/30 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-red-500 dark:text-red-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 stroke-[2]" />
              What Happens When Data Is Deleted
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-4 leading-relaxed">
              Performing a data deletion request immediately and permanently removes the following components from your device disk storage:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {deletedItems.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-red-800 dark:text-red-400 flex items-start">
              <RefreshCw className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 animate-spin-slow" />
              <div className="text-sm font-semibold">
                Warning: This action is instantaneous and irreversible. We cannot retrieve or restore deleted data since we do not keep backups or copies of your information.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
