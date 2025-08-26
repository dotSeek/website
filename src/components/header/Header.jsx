"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ siteName = "iLanding", navItems = [], cta }) {
  const pathname = usePathname();

  // Helper to render nav items (with dropdown support)
  const renderNavItems = (items) => (
    <ul>
      {items.map((item, idx) => {
        if (item.children && item.children.length > 0) {
          return (
            <li key={idx} className="dropdown">
              <a href={item.href || "#"}>
                <span>{item.label}</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              {renderNavItems(item.children)}
            </li>
          );
        }
        return (
          <li key={idx}>
            <a
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <img src="/assets/img/logo.png" alt="Logo" />
          {/* <h1 className="sitename">{siteName}</h1> */}
        </Link>

        <nav id="navmenu" className="navmenu">
          {renderNavItems(navItems)}
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {cta && (
          <Link href={cta.href} className="btn-getstarted">
            {cta.label}
          </Link>
        )}
      </div>
    </header>
  );
}
