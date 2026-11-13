import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { LogOut } from "lucide-react";
export const metadata: Metadata = { title: "SHUBHIII | Creator Learning Studio", description: "Practical courses for building a thoughtful YouTube channel." };
async function Header() {
  const user = await getSession();
  return <header style={{borderBottom:"1px solid #edf0f5",background:"#ffffffed",position:"sticky",top:0,zIndex:30,backdropFilter:"blur(14px)"}}>
    <div className="container" style={{height:76,display:"flex",alignItems:"center",justifyContent:"space-between",gap:20}}>
      <Link href="/" style={{fontSize:23,fontWeight:900,letterSpacing:"-.8px",color:"#102b55"}}>SHUBHIII<span style={{color:"#3974c8"}}>.</span></Link>
      <nav className="desktop-nav" style={{display:"flex",alignItems:"center",gap:28}}><Link className="nav-link" href="/">Home</Link><Link className="nav-link" href="/courses">Courses</Link><Link className="nav-link" href="/contact">Contact</Link></nav>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        {user ? <><Link className="btn btn-light" href="/dashboard">My learning</Link><form action="/api/auth/logout" method="post"><button className="btn" type="submit"><LogOut size={15}/> Logout</button></form></> : <><Link className="nav-link" href="/login">Log in</Link><Link className="btn" href="/signup">Get started</Link></>}
      </div>
    </div>
  </header>;
}
export default async function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body><Header/>{children}<footer style={{marginTop:80,background:"#0d2345",color:"#fff",padding:"46px 0"}}>
  <div className="container" style={{display:"flex",justifyContent:"space-between",gap:30,flexWrap:"wrap"}}>
   <div><div style={{fontSize:22,fontWeight:900}}>SHUBHIII.</div><p style={{color:"#c0cde0",maxWidth:340,lineHeight:1.7}}>Learn the craft behind thoughtful, original YouTube content. Build skills one lesson at a time.</p></div>
   <div style={{display:"flex",gap:20,alignItems:"center",flexWrap:"wrap",color:"#d5deeb",fontSize:14}}><Link href="/courses">Courses</Link><Link href="/contact">Contact</Link><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></div>
  </div><div className="container" style={{borderTop:"1px solid #ffffff24",marginTop:30,paddingTop:20,color:"#aebdd2",fontSize:12}}>© {new Date().getFullYear()} SHUBHIII. All rights reserved. Educational content only; results depend on your effort and platform policies.</div>
 </footer></body></html>;
}