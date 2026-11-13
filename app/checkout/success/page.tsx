import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";export default function Success(){return <main className="container" style={{padding:"90px 0",maxWidth:620,textAlign:"center"}}><div style={{fontSize:54}}>✓</div><h1 style={{fontSize:38}}>Payment received</h1><p className="muted" style={{lineHeight:1.7}}>Thanks for learning with {siteConfig.businessName}. Course access activates after Stripe confirms payment. This can take a few seconds.</p><Link className="btn" href="/dashboard" style={{marginTop:20}}>Go to my dashboard</Link></main>}

export const metadata: Metadata = { title: "Payment Confirmation", description: "Return to your SHUBHIII learning dashboard after checkout.", robots: { index: false, follow: false } };
