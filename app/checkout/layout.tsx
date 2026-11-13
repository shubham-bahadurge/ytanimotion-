import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Secure Checkout",
  description: `Review your ${siteConfig.businessName} course order before completing payment.`,
  robots: { index: false, follow: false }
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
