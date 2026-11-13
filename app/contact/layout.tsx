import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.businessName}`,
  description: `Contact ${siteConfig.businessName} for course, account and learning-platform support.`,
  alternates: { canonical: "/contact" }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
