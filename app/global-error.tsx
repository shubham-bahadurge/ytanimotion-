"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("SHUBHIII application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 32, fontFamily: "Arial, sans-serif", color: "#17243a" }}>
        <main style={{ maxWidth: 620, margin: "10vh auto", textAlign: "center" }}>
          <h1>SHUBHIII is having trouble loading.</h1>
          <p>Please try again. If the problem continues, contact the site support team.</p>
          <button type="button" onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
}
