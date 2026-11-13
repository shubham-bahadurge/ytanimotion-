"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { courses } from "@/data/courses";
import { siteConfig } from "@/config/site";

function CheckoutContent() {
  const params = useSearchParams();
  const slug = params.get("course");
  const course = courses.find((item) => item.slug === slug);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function buy() {
    setBusy(true);
    setError("");
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseSlug: slug })
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "Unable to start checkout.");
      setBusy(false);
      return;
    }
    window.location.href = data.url;
  }

  if (!course) {
    return (
      <main className="container checkout-page">
        <h1>Course not found</h1>
        <p className="muted">Choose a course from the course library to continue.</p>
        <Link className="btn" href="/courses">Browse courses</Link>
      </main>
    );
  }

  return (
    <main className="container checkout-page">
      <p className="eyebrow">SECURE CHECKOUT</p>
      <h1 className="checkout-title">Review your order</h1>
      <div className="card checkout-card">
        <div className="checkout-order-row">
          <div>
            <h2>{course.title}</h2>
            <p className="muted">Lifetime access to the course lessons</p>
          </div>
          <strong>₹{course.price.toLocaleString("en-IN")}</strong>
        </div>
        <hr />
        <div className="checkout-total">
          <span>Total</span>
          <span>₹{course.price.toLocaleString("en-IN")}</span>
        </div>
        <button className="btn checkout-submit" onClick={buy} disabled={busy}>
          {busy ? "Redirecting to Stripe…" : "Continue to secure payment"}
        </button>
        {error ? <p className="checkout-error" role="alert">{error}</p> : null}
        <p className="muted checkout-note">
          You will complete payment on Stripe's hosted checkout page. Test mode only until live Stripe keys are configured.
        </p>
        <p className="muted checkout-note">{siteConfig.trustLine}</p>
        <p className="checkout-policy-link"><Link href="/refund">Read the refund policy</Link></p>
      </div>
    </main>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={<main className="container checkout-page">Loading checkout…</main>}>
      <CheckoutContent />
    </Suspense>
  );
}
