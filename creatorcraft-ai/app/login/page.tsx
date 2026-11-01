import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Account access</p>
            <h1>Log in to your studio.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="card form-card">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />

              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" />

              <Link href="/dashboard" className="button primary" style={{ width: "100%" }}>
                Sign in
              </Link>

              <p style={{ color: "var(--muted)", marginTop: 18 }}>
                Need an account? <Link href="/register">Create one</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
