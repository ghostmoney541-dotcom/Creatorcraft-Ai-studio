import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">About</p>
            <h1>CreatorCraft AI exists to turn creative ambition into a repeatable system.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="card-section">
              <p>
                The platform combines AI-powered creative generation, content planning, website design, and operational systems.
                It is designed to help creators move from idea to launch without disconnected tools or fragmented workflows.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
