import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account",
  description: "Create a SHUBHIII account to purchase and access creator-learning courses.",
  robots: { index: false, follow: false }
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
