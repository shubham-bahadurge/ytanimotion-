"use client";

import Link from "next/link";
import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function SiteHeader({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={closeMenu} aria-label={`${siteConfig.businessName} home`}>
          {siteConfig.businessName}<span>.</span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link className="nav-link" href="/" onClick={closeMenu}>Home</Link>
          <Link className="nav-link" href="/courses" onClick={closeMenu}>Courses</Link>
          <Link className="nav-link" href="/contact" onClick={closeMenu}>Contact</Link>
          {isLoggedIn ? (
            <>
              <Link className="btn btn-light nav-action" href="/dashboard" onClick={closeMenu}>My learning</Link>
              <form action="/api/auth/logout" method="post">
                <button className="btn nav-action" type="submit"><LogOut size={15} aria-hidden="true" /> Logout</button>
              </form>
            </>
          ) : (
            <>
              <Link className="nav-link" href="/login" onClick={closeMenu}>Log in</Link>
              <Link className="btn nav-action" href="/signup" onClick={closeMenu}>Get started</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
