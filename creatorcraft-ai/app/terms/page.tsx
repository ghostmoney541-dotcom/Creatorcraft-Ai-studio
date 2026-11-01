import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Terms of service</p>
            <h1>Use of the platform is governed by these terms.</h1>
          </div>
        </section>
        <section className="page-content">
          <div className="container">
            <div className="card-section">
              <p>Draft terms for owner review. This page outlines the expected rules for account use, prohibited activity, content ownership, billing, and platform operations.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
