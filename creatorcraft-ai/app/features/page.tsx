import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Platform overview</p>
            <h1>Everything you need to build, ship, and grow creative work.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container two-column">
            <div className="card-section">
              <h2>Creative tools</h2>
              <ul>
                <li>AI Music Lab</li>
                <li>Lyric Architect</li>
                <li>Music Video Studio</li>
                <li>Video Editor</li>
                <li>Jingle Foundry</li>
                <li>Brand Forge</li>
                <li>Website Builder</li>
                <li>Growth Engine</li>
              </ul>
            </div>

            <div className="card-section">
              <h2>Business foundation</h2>
              <ul>
                <li>Secure account system</li>
                <li>Subscription billing and credit tracking</li>
                <li>Provider abstraction for AI services</li>
                <li>Admin dashboards and reporting</li>
                <li>Protected customer data and audit flows</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
