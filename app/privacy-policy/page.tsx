import React from "react";
import { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the MedAxiz Privacy Policy to understand how we protect your health data with our offline-first and local-only storage architecture.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
