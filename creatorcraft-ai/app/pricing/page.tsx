import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["1 workspace", "Limited AI credits", "Community support"],
    popular: false
  },
  {
    name: "Creator",
    price: "$12",
    features: ["Unlimited concept boards", "Monthly credits", "Saved project library"],
    popular: false
  },
  {
    name: "Studio",
    price: "$29",
    features: ["Advanced AI workflows", "Priority support", "Brand and campaign tools"],
    popular: true
  },
  {
    name: "Pro",
    price: "$59",
    features: ["Team access", "Developer agent usage", "Custom integrations"],
    popular: false
  }
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Membership pricing</p>
            <h1>Choose the plan that grows with your creative business.</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`price-card card ${plan.popular ? "featured" : ""}`}>
                <p className="eyebrow">{plan.name}</p>
                <div className="price">{plan.price}<small>/month</small></div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
