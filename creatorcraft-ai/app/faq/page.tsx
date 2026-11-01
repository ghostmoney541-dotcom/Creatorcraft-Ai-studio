import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const faqs = [
  "What is CreatorCraft AI?",
  "How do memberships and credits work?",
  "Can I use the developer agent for production code work?",
  "How are billing and subscriptions managed?",
  "What services are included in the platform foundation?"
];

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">FAQ</p>
            <h1>Common questions for creators and teams.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="card-section">
              <ul>
                {faqs.map((faq) => (
                  <li key={faq}>{faq}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
