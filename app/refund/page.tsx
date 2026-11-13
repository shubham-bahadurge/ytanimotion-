import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy", description: `Review ${siteConfig.businessName} refund information and request guidance.`, alternates: { canonical: "/refund" }, robots: { index: false, follow: true } };

import { siteConfig } from "@/config/site";

export default function RefundPolicyPage() {
  return (
    <main className="container policy-page">
      <p className="eyebrow">POLICIES</p>
      <h1>Refund Policy</h1>
      <p className="policy-notice"><strong>PLACEHOLDER — replace before launch.</strong> Do not advertise a refund period or guarantee until the final policy is approved and matches your actual business practice.</p>
      <h2>Refund eligibility</h2>
      <p>TODO: Confirm the refund eligibility rules, exact refund window, exclusions and any required evidence.</p>
      <h2>How to request a refund</h2>
      <p>TODO: Confirm the support email or form and the purchase details required to submit a request.</p>
      <h2>Review and processing</h2>
      <p>TODO: Confirm the review process, response time and refund processing method.</p>
      <h2>Contact</h2>
      <p>Add the official support contact details and ensure this policy is consistent with your checkout page and applicable consumer-protection requirements.</p>
    </main>
  );
}
