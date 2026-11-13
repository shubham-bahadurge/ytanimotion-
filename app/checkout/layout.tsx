import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout",
  description: "Review your SHUBHIII course order before completing payment.",
  robots: { index: false, follow: false }
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
