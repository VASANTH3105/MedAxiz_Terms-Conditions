"use client";

import React, { useEffect, useState, useRef } from "react";
import { Shield, ChevronRight, Mail, Calendar, ExternalLink } from "lucide-react";
import { APP_METADATA } from "@/lib/constants";

interface Section {
  id: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: "introduction", title: "1. Introduction" },
  { id: "info-collect", title: "2. Information We Collect" },
  { id: "info-use", title: "3. How Your Information Is Used" },
  { id: "data-storage", title: "4. Data Storage" },
  { id: "data-sharing", title: "5. Data Sharing" },
  { id: "connectivity", title: "6. Internet Connectivity" },
  { id: "fcm", title: "7. Firebase Cloud Messaging" },
  { id: "advertising", title: "8. Advertising" },
  { id: "security", title: "9. Security" },
  { id: "disclaimer", title: "10. Medical Disclaimer" },
  { id: "liability", title: "11. Limitation of Liability" },
  { id: "children", title: "12. Children's Privacy" },
  { id: "changes", title: "13. Changes to This Policy" },
  { id: "contact", title: "14. Contact" },
];

export default function PrivacyPolicyContent() {
  const [activeId, setActiveId] = useState<string>("introduction");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      // Find entries that are intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by how close to top of viewport they are
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveId(visibleEntries[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in top half of screen
      threshold: 0.1,
    });

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85; // accounts for sticky navigation header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      
      // Update browser history hash
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Title Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
        <div className="flex items-center space-x-3 text-primary mb-3">
          <Shield className="h-8 w-8 stroke-[2]" />
          <span className="font-semibold text-sm uppercase tracking-wider">Compliance Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mt-3">
          <Calendar className="h-4 w-4" />
          <span>Last Updated: June 2026</span>
        </div>
      </div>

      {/* Main Grid: Sidebar (Desktop) + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Desktop Sidebar Table of Contents */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start max-h-[75vh] overflow-y-auto pr-4 border-r border-slate-200/60 dark:border-slate-800/60">
          <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
            Table of Contents
          </h2>
          <nav className="space-y-1" aria-label="Privacy Policy Sections">
            {SECTIONS.map((section) => {
              const active = activeId === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 font-medium ${
                    active
                      ? "text-primary bg-primary/10 dark:bg-primary/20 scale-[1.02] translate-x-1"
                      : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800/40"
                  }`}
                >
                  <span>{section.title}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      active ? "transform translate-x-0.5 opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Policy Content */}
        <div className="lg:col-span-8 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">01.</span> Introduction
            </h2>
            <div className="space-y-4">
              <p>
                Welcome to <strong>{APP_METADATA.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy. This Privacy Policy explains how our application manages your information.
              </p>
              <p>
                Unlike standard health tracking platforms, {APP_METADATA.name} is designed as an <strong>offline-first, local-first application</strong>. Your privacy is protected because your medical schedules and history logs are never collected or stored on central cloud databases.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section id="info-collect" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">02.</span> Information We Collect
            </h2>
            <div className="space-y-4">
              <p>
                We believe in complete data minimization:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>No Personal Identity Data:</strong> We do not ask you to provide your name, email address, phone number, or social profiles.
                </li>
                <li>
                  <strong>No Account Credentials:</strong> There is no sign-in or account creation interface.
                </li>
                <li>
                  <strong>No Health Data Harvesting:</strong> Your medication schedules, dosages, adherence logs, and custom medicine names are strictly typed by you and reside purely inside your local device boundaries. We never collect or transmit these data sets.
                </li>
              </ul>
            </div>
          </section>

          {/* How Your Information Is Used */}
          <section id="info-use" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">03.</span> How Your Information Is Used
            </h2>
            <div className="space-y-4">
              <p>
                Because your data is saved only on your local system, we have zero access to it. Any information you input is processed locally to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Configure local push reminders and scheduling engines.</li>
                <li>Generate local adherence dashboard analytics and chart reports.</li>
                <li>Assemble localized compliance PDF files for your personal download or share actions.</li>
              </ul>
            </div>
          </section>

          {/* Data Storage */}
          <section id="data-storage" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">04.</span> Data Storage
            </h2>
            <div className="space-y-4">
              <p>
                Your application inputs are saved within a local SQLite database storage partition provided by your mobile operating system. 
              </p>
              <p>
                This data is not backed up to a MedAxiz server. If you clear the application data via settings, delete the app, or lose your device, your data will be permanently deleted unless you have exported a manual backup file.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section id="data-sharing" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">05.</span> Data Sharing
            </h2>
            <p>
              We cannot share, sell, or rent your health data or reminder logs because we do not have access to them. Your data remains 100% private and localized to your device.
            </p>
          </section>

          {/* Internet Connectivity */}
          <section id="connectivity" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">06.</span> Internet Connectivity
            </h2>
            <p>
              {APP_METADATA.name} operates completely offline. The core scheduling, analytics engine, and PDF generator run natively on your device hardware without requiring an internet connection.
            </p>
          </section>

          {/* Firebase Cloud Messaging */}
          <section id="fcm" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">07.</span> Firebase Cloud Messaging (FCM)
            </h2>
            <p>
              We may utilize native Firebase Cloud Messaging (FCM) systems to deliver critical announcements or updates regarding compliance, privacy policy revisions, or critical bug resolutions. FCM does not collect, track, or share your medication schedules or database contents.
            </p>
          </section>

          {/* Advertising */}
          <section id="advertising" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">08.</span> Advertising
            </h2>
            <p>
              {APP_METADATA.name} does not display third-party advertisements or integrate ad tracking SDKs. We do not monetize your attention or compromise your wellness logging with ad-tech pixels.
            </p>
          </section>

          {/* Security */}
          <section id="security" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">09.</span> Security
            </h2>
            <p>
              We prioritize the physical security of your local logs. {APP_METADATA.name} includes built-in settings allowing you to enforce application-level biometric locks (Fingerprint / Face Unlock) or passcode protection (PIN) to prevent unauthorized access if someone handles your unlocked mobile device.
            </p>
          </section>

          {/* Medical Disclaimer */}
          <section id="disclaimer" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">10.</span> Medical Disclaimer
            </h2>
            <p>
              {APP_METADATA.name} is an information organization tool. It is not a clinical medical service, healthcare provider, or professional advice platform. You should always consult with qualified healthcare professionals to coordinate your prescriptions, dosages, and medical treatment schedules.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section id="liability" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">11.</span> Limitation of Liability
            </h2>
            <p>
              The application schedules alarms using native operating system tools. Alarms can occasionally be delayed or suppressed by system battery management scripts, device shutdowns, or OS-level restrictions. You agree that we are not liable for any dosage errors, missed notifications, or health complications resulting from the use of this application.
            </p>
          </section>

          {/* Children's Privacy */}
          <section id="children" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">12.</span> Children&apos;s Privacy
            </h2>
            <p>
              Our application does not request or collect personal information from children under the age of 13. Since all data is stored locally, parents or guardians have complete control over data entry and app usage on devices used by minors.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section id="changes" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">13.</span> Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated&rdquo; date at the top of this policy document.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-primary font-mono">14.</span> Contact Us
            </h2>
            <div className="bg-slate-100 dark:bg-[#12131a] border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-2xl">
              <p className="mb-4">
                If you have any questions, suggestions, or concerns regarding our privacy practices, please contact our support team:
              </p>
              <a
                href={`mailto:${APP_METADATA.supportEmail}`}
                className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
              >
                <Mail className="h-4 w-4" />
                <span>{APP_METADATA.supportEmail}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
