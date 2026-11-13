"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("SHUBHIII page error:", error);
  }, [error]);

  return (
    <main className="container" style={{ padding: "90px 0", maxWidth: 650, textAlign: "center" }}>
      <p className="eyebrow">SOMETHING WENT WRONG</p>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>This page couldn't load.</h1>
      <p className="muted" style={{ lineHeight: 1.7 }}>Please try again. If the problem continues, contact {siteConfig.businessName} support.</p>
      <button className="btn" type="button" onClick={() => reset()}>Try again</button>
    </main>
  );
}
