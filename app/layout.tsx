import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "SHUBHIII | Creator Learning Studio", template: "%s | SHUBHIII" },
  description: "Beginner-friendly courses on YouTube strategy, original content planning and creator workflows.",
  openGraph: {
    type: "website",
    siteName: siteConfig.businessName,
    title: "SHUBHIII | Creator Learning Studio",
    description: "Beginner-friendly courses on YouTube strategy, original content planning and creator workflows.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SHUBHIII Creator Learning Studio" }]
  },
  twitter: { card: "summary_large_image", title: "SHUBHIII | Creator Learning Studio", description: "Learn YouTube strategy and original content workflows." }
};

async function Footer() {
  const { social } = siteConfig;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <div className="footer-brand">{siteConfig.businessName}.</div>
            <p className="footer-description">Learn the craft behind thoughtful, original YouTube content. Build skills one lesson at a time.</p>
            {siteConfig.supportEmail ? <p><a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p> : null}
            {siteConfig.businessAddress ? <p className="footer-description">{siteConfig.businessAddress}</p> : null}
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refund">Refund Policy</Link>
            {social.youtube ? <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Visit SHUBHIII on YouTube">YouTube ↗</a> : null}
            {social.instagram ? <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit SHUBHIII on Instagram">Instagram ↗</a> : null}
          </nav>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved. Educational content only; results depend on your effort and platform policies.</div>
      </div>
    </footer>
  );
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getSession();
  return (
    <html lang="en">
      <body>
        <SiteHeader isLoggedIn={Boolean(user)} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
