import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy", description: "Review SHUBHIII refund information and request guidance.", alternates: { canonical: "/refund" }, robots: { index: false, follow: true } };

export default function RefundPolicyPage() {
  return (
    <main className="container policy-page">
      <p className="eyebrow">POLICIES</p>
      <h1>Refund Policy</h1>
      <p className="policy-notice"><strong>PLACEHOLDER — replace before launch.</strong> Do not advertise a refund period or guarantee until the final policy is approved and matches your actual business practice.</p>
      <h2>Refund eligibility</h2>
      <p>State the exact circumstances in which a student may request a refund, including any time limit and eligibility requirements.</p>
      <h2>How to request a refund</h2>
      <p>Explain which official email address or contact form students should use and what purchase information they should provide.</p>
      <h2>Review and processing</h2>
      <p>Describe how requests are reviewed, the expected response time and how approved refunds are processed through the original payment method.</p>
      <h2>Contact</h2>
      <p>Add your official support contact details and ensure this policy is consistent with your checkout page and applicable consumer-protection requirements.</p>
    </main>
  );
}
