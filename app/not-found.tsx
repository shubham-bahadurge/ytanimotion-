import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="container" style={{ padding: "90px 0", maxWidth: 650, textAlign: "center" }}>
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1 style={{ fontSize: "clamp(34px, 6vw, 48px)" }}>We couldn't find that page.</h1>
      <p className="muted" style={{ lineHeight: 1.7 }}>The link may be outdated or the page may have moved. Browse the course library or return to the homepage.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
        <Link className="btn" href="/courses">Browse courses</Link>
        <Link className="btn btn-light" href="/">Go home</Link>
      </div>
    </main>
  );
}
