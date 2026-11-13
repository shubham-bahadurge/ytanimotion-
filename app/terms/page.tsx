import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Review the terms of use and course access rules for ${siteConfig.businessName}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true }
};

export default function TermsPage() {
  return (
    <main className="container policy-page">
      <p className="eyebrow">POLICIES</p>
      <h1>Terms &amp; Conditions</h1>
      <p className="muted">Last updated: November 2026</p>

      <h2>1. Agreement to Terms</h2>
      <p>
        These Terms &amp; Conditions govern your access to and use of {siteConfig.businessName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) and all associated courses, lessons, and content. By creating an account, browsing the website, or purchasing a course, you agree to be bound by these terms.
      </p>

      <h2>2. Account Rules</h2>
      <p>
        To access purchased courses, you must create an account. You agree to provide accurate and complete registration details. You are responsible for safeguarding your login credentials and for all activities that occur under your account. You may not share, transfer, or allow others to use your login credentials.
      </p>

      <h2>3. Course Access &amp; Personal-Use License</h2>
      <p>
        Upon purchase of a course, {siteConfig.businessName} grants you a personal, non-exclusive, non-transferable, revocable license to access and view the course materials for your individual educational use.
      </p>
      <p>
        <strong>Access type:</strong> Course purchases include {siteConfig.accessType} access to the lessons and modules as long as the platform is active. {/* TODO: Confirm lifetime vs time-limited access rules */}
      </p>

      <h2>4. Intellectual Property &amp; Prohibited Uses</h2>
      <p>
        All course content—including video lessons, curriculum structures, lesson notes, downloadable resources, graphics, and branding—is the exclusive intellectual property of {siteConfig.businessName} or its licensors.
      </p>
      <p>
        You agree that you will not:
      </p>
      <ul>
        <li>Copy, record, rip, download, distribute, stream, or publicly display any part of the course content.</li>
        <li>Resell, sublicense, share, or syndicate course materials or access credentials to any third party.</li>
        <li>Modify, reverse engineer, or create derivative works from course lessons or platform software.</li>
      </ul>

      <h2>5. Educational Nature &amp; Results Disclaimer</h2>
      <p>
        All courses and learning materials provided by {siteConfig.businessName} are strictly for educational and informational purposes. Results depend on your effort, execution, and platform policies; no specific views, subscribers, audience size, revenue, or earnings are guaranteed. We do not promote or teach misleading growth tactics, artificial engagement, or violations of third-party platform rules.
      </p>

      <h2>6. Termination</h2>
      <p>
        We reserve the right to suspend or terminate account access if these Terms are violated, including unauthorized sharing of account credentials or illegal distribution of course materials.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have questions about these Terms, please contact us via our{" "}
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
