import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms and Conditions", description: `Review the terms for using ${siteConfig.businessName} and accessing its learning content.`, alternates: { canonical: "/terms" }, robots: { index: false, follow: true } };

import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <main className="container policy-page">
      <p className="eyebrow">POLICIES</p>
      <h1>Terms &amp; Conditions</h1>
      <p className="policy-notice"><strong>PLACEHOLDER — replace before launch.</strong> This page is not a complete legal agreement. Have the final terms reviewed for your business and location.</p>
      <h2>Using {siteConfig.businessName}</h2>
      <p>TODO: Define who may use the website, account responsibilities and the rules for accessing course materials.</p>
      <h2>Course purchases and access</h2>
      <p>TODO: Confirm the actual checkout process, when access is provided, how long access lasts and what happens if a payment is unsuccessful.</p>
      <h2>Content and intellectual property</h2>
      <p>TODO: Define ownership and permitted use of course videos, downloads, branding and student-submitted material.</p>
      <h2>Educational information</h2>
      <p>Courses provide educational guidance. Results vary and {siteConfig.businessName} does not guarantee views, subscribers, revenue or channel growth.</p>
      <h2>Contact</h2>
      <p>TODO: Add the official business name and contact details for questions about these terms.</p>
    </main>
  );
}
