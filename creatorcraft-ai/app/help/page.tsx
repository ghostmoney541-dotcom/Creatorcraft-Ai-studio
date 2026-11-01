import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HelpPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Help center</p>
            <h1>Get support for your account, projects, and billing.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="card-section">
              <ul>
                <li>Account and login help</li>
                <li>Project workflow guidance</li>
                <li>Membership and billing support</li>
                <li>Usage and credit questions</li>
                <li>AI provider status notifications</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
