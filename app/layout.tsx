import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "SHUBHIII | Creator Learning Studio",
  description: "Practical courses for building a thoughtful YouTube channel."
};

async function Footer() {
  const { social } = siteConfig;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <div className="footer-brand">SHUBHIII.</div>
            <p className="footer-description">Learn the craft behind thoughtful, original YouTube content. Build skills one lesson at a time.</p>
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
        <div className="footer-bottom">© {new Date().getFullYear()} SHUBHIII. All rights reserved. Educational content only; results depend on your effort and platform policies.</div>
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
