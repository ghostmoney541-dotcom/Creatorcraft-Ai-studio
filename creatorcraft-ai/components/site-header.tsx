import Link from "next/link";
import { siteNav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" aria-label="CreatorCraft AI home">
          <span className="brand-mark">✦</span>
          <span>CreatorCraft AI</span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/register" className="nav-cta">
            Start free
          </Link>
        </nav>
      </div>
    </header>
  );
}
