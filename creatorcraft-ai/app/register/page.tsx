import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Create account</p>
            <h1>Join the studio.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="card form-card">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />

              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Create a password" />

              <Link href="/dashboard" className="button primary" style={{ width: "100%" }}>
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
