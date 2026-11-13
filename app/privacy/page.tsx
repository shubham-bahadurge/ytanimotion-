import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read how ${siteConfig.businessName} handles account, purchase and contact information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container policy-page">
      <p className="eyebrow">POLICIES</p>
      <h1>Privacy Policy</h1>
      <p className="muted">Last updated: November 2026</p>

      <h2>1. Overview</h2>
      <p>
        This Privacy Policy explains how {siteConfig.businessName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and safeguards personal information when you visit our website, register for an account, purchase courses, or contact us.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect only the personal information necessary to deliver our educational services:</p>
      <ul>
        <li><strong>Account details:</strong> When you register on the platform, we collect your name and email address.</li>
        <li><strong>Purchase records:</strong> When you purchase a course, we record your account identifier, course enrollment, transaction identifier, and payment status.</li>
        <li><strong>Contact form messages:</strong> When you submit a message through our contact form, we collect your name, email address, and the contents of your inquiry.</li>
      </ul>

      <h2>3. Payment Processing</h2>
      <p>
        Payment transactions are processed securely through our third-party payment provider ({siteConfig.paymentProvider}). We do not process, collect, or store your credit card numbers, debit card details, or banking credentials on our servers. All payment transactions are handled directly by {siteConfig.paymentProvider} under their security and privacy policies.
      </p>

      <h2>4. Hosting and Infrastructure</h2>
      <p>
        The {siteConfig.businessName} platform and database services are hosted with Vercel and cloud infrastructure providers. Server request logs, network routing, and caching are managed in accordance with standard cloud security and hosting practices.
      </p>

      <h2>5. How We Use Your Information</h2>
      <p>We use the collected information exclusively to:</p>
      <ul>
        <li>Provide access to courses, lessons, and your personal student dashboard.</li>
        <li>Authenticate your account login and maintain your learning progress.</li>
        <li>Send transactional notifications related to your account or course access.</li>
        <li>Respond to questions, support inquiries, and feedback submitted through our contact form.</li>
      </ul>

      <h2>6. Access and Data Deletion Requests</h2>
      <p>
        You have the right to request access to the personal data we hold about you, or to request correction or complete deletion of your account and personal records.
      </p>
      <p>
        {siteConfig.supportEmail ? (
          <>
            To submit an access or deletion request, please email us at{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> or use our{" "}
            <Link href="/contact">contact form</Link>.
          </>
        ) : (
          <>
            To submit an access or deletion request, please contact us using our{" "}
            <Link href="/contact">contact form</Link>. {/* TODO: Add official support email address in config/site.ts */}
          </>
        )}
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or how your data is handled, please reach out via our{" "}
        <Link href="/contact">contact page</Link>
        {siteConfig.supportEmail ? (
          <> or by email at <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></>
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
