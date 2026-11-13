import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Review refund rules, request procedures and eligibility for ${siteConfig.businessName} courses.`,
  alternates: { canonical: "/refund" },
  robots: { index: false, follow: true }
};

export default function RefundPolicyPage() {
  return (
    <main className="container policy-page">
      <p className="eyebrow">POLICIES</p>
      <h1>Refund Policy</h1>
      <p className="muted">Last updated: November 2026</p>

      <h2>1. Overview</h2>
      <p>
        At {siteConfig.businessName}, we want learners to have confidence in their educational investment. This Refund Policy describes the terms under which course purchases may be refunded.
      </p>

      <h2>2. Refund Window &amp; Eligibility</h2>
      <p>
        {siteConfig.refundWindow !== "TODO" ? (
          `Refund requests must be submitted within ${siteConfig.refundWindow} days of the original purchase date.`
        ) : (
          <>
            Refund requests are subject to the applicable refund window. {/* TODO: Confirm the exact refund window (number of days) before launch. */}
          </>
        )}
      </p>
      <p>
        {siteConfig.refundEligibility !== "TODO" ? (
          siteConfig.refundEligibility
        ) : (
          <>
            Eligibility conditions apply to all refund requests. {/* TODO: Confirm refund eligibility rules (e.g., maximum lesson completion percentage or verification requirements) before launch. */}
          </>
        )}
      </p>

      <h2>3. How to Submit a Refund Request</h2>
      <p>
        To request a refund, please contact us via our <Link href="/contact">contact form</Link>
        {siteConfig.supportEmail ? (
          <> or email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></>
        ) : null}.
      </p>
      <p>When contacting us, please include:</p>
      <ul>
        <li>Your account name and registered email address</li>
        <li>The title of the course purchased</li>
        <li>Your order date and payment confirmation details</li>
      </ul>

      <h2>4. Processing and Method</h2>
      <p>
        Approved refunds are processed back to the original payment method through our payment processor ({siteConfig.paymentProvider}). The time required for the funds to reflect in your account depends on your card issuer or banking provider.
      </p>

      <h2>5. Questions</h2>
      <p>
        If you have any questions regarding our refund policy, please reach out via our{" "}
        <Link href="/contact">contact page</Link>
        {siteConfig.supportEmail ? (
          <> or email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></>
        ) : null}.
      </p>
      {siteConfig.businessAddress ? (
        <p className="muted">{siteConfig.businessAddress}</p>
      ) : (
        <p className="muted">{/* TODO: Add registered business address in config/site.ts */}</p>
      )}
    </main>
  );
}
