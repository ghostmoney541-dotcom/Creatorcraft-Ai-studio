import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Talk to the CreatorCraft team.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="card form-card">
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="Your name" />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />

              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="How can we help?" />

              <button className="button primary" type="button">
                Send message
              </button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
