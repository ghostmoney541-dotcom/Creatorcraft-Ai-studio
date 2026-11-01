import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function DashboardPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Customer dashboard</p>
            <h1>Welcome back, creator.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container two-column">
            <div className="card-section">
              <h2>Overview</h2>
              <ul>
                <li>Recent projects</li>
                <li>Saved concepts</li>
                <li>AI usage history</li>
                <li>Membership and credits</li>
              </ul>
            </div>

            <div className="card-section">
              <h2>Quick actions</h2>
              <ul>
                <li><Link href="/features">Open studio tools</Link></li>
                <li><Link href="/pricing">Manage subscription</Link></li>
                <li><Link href="/help">Support center</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
