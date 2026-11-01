import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function StudioPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Creative studio</p>
            <h1>Launch your next asset from one workspace.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container two-column">
            <div className="card-section">
              <h2>Studio modules</h2>
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
              <h2>Project workflow</h2>
              <ul>
                <li>Brief capture</li>
                <li>AI generation</li>
                <li>Revision and export</li>
                <li>Saved project versions</li>
                <li>Usage and credit tracking</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
