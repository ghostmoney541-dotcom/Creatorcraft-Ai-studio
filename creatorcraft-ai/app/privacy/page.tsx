import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Privacy policy</p>
            <h1>Your data is handled with care and transparency.</h1>
          </div>
        </section>
        <section className="page-content">
          <div className="container">
            <div className="card-section">
              <p>Draft privacy policy for owner review. This page documents data collection, service usage, security expectations, retention, and user rights.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
