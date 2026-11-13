import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: `Read how ${siteConfig.businessName} handles account, course and contact information.`, alternates: { canonical: "/privacy" }, robots: { index: false, follow: true } };

import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <main className="container policy-page">
      <p className="eyebrow">POLICIES</p>
      <h1>Privacy Policy</h1>
      <p className="policy-notice"><strong>PLACEHOLDER — replace before launch.</strong> This page is a drafting placeholder, not a complete legal privacy notice.</p>
      <h2>Information we may collect</h2>
      <p>{siteConfig.businessName} may collect account details, course access information and messages submitted through the contact form. TODO: Confirm the exact account, payment, usage and contact information collected by the live service, including retention periods.</p>
      <h2>How information is used</h2>
      <p>TODO: Document the actual purposes for processing personal information and the legal basis that applies.</p>
      <h2>Payments and third parties</h2>
      <p>TODO: List the actual payment, hosting, analytics and other service providers that process personal information.</p>
      <h2>Contact</h2>
      <p>TODO: Add the official privacy contact details and a process for privacy requests.</p>
    </main>
  );
}
