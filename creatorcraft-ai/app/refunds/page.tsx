import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function RefundPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Refund and cancellation</p>
            <h1>Clear billing policies for member confidence.</h1>
          </div>
        </section>
        <section className="page-content">
          <div className="container">
            <div className="card-section">
              <p>Draft refund and cancellation policy for owner review. This page explains cancellation timing, renewals, failed payments, and compliance expectations for paid memberships.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
