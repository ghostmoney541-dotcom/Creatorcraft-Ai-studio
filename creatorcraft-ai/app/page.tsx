import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const tools = [
  {
    name: "AI Music Lab",
    description: "Develop original music concepts, moods, arrangements, and production-ready creative prompts.",
    icon: "♫"
  },
  {
    name: "Lyric Architect",
    description: "Draft lyrics, hook lines, bridges, and full song structure with brand-safe creative assistance.",
    icon: "✍"
  },
  {
    name: "Music Video Studio",
    description: "Map cinematic scenes, shots, storyboard beats, and visual direction for your next release.",
    icon: "▶"
  },
  {
    name: "Video Editor",
    description: "Organize clips, timeline sequences, overlays, captions, and export-ready publishing workflows.",
    icon: "▣"
  },
  {
    name: "Jingle Foundry",
    description: "Create memorable ad jingles and brand audio directions with tone, style, and campaign fit in mind.",
    icon: "♪"
  },
  {
    name: "Brand Forge",
    description: "Shape naming, brand language, palettes, identity systems, and strategic creative packaging.",
    icon: "⚒"
  },
  {
    name: "Website Builder",
    description: "Generate responsive website concepts, landing page structure, and conversion-focused page direction.",
    icon: "⌘"
  },
  {
    name: "Growth Engine",
    description: "Plan campaigns, content calendars, caption systems, and creative marketing momentum.",
    icon: "↗"
  }
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="page-shell">
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Your vision. Your universe.</p>
              <h1>
                Make something <span>unforgettable.</span>
              </h1>
              <p className="lead">
                One studio for music, visuals, branding, growth strategies, and AI-powered product creation.
              </p>
              <div className="cta-row">
                <Link href="#studio" className="button primary">
                  Enter the studio
                </Link>
                <Link href="/pricing" className="button secondary">
                  View pricing
                </Link>
              </div>
            </div>

            <div className="hero-panel card">
              <p className="panel-kicker">Creative system</p>
              <h2>CreatorCraft AI</h2>
              <ul>
                <li>8 creative tools</li>
                <li>Secure customer dashboard</li>
                <li>Stripe-powered memberships</li>
                <li>AI provider architecture</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="studio" className="section studio-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The creative arsenal</p>
                <h2>Choose your craft.</h2>
              </div>
              <span className="meta-pill">08 tools / one studio</span>
            </div>

            <div className="tool-grid">
              {tools.map((tool) => (
                <article key={tool.name} className="tool-card card">
                  <div className="tool-icon">{tool.icon}</div>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                  <span className="tool-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-column">
            <div className="card feature-panel">
              <p className="eyebrow">Developer agent</p>
              <h2>Turn ideas into production-ready systems.</h2>
              <p>
                Describe the app, website, or product you want to build. CreatorCraft Developer Agent helps you prototype,
                revise, explain errors, and export a working project structure.
              </p>
              <Link href="/register" className="button primary">
                Start building
              </Link>
            </div>

            <div className="card feature-panel">
              <p className="eyebrow">Membership</p>
              <h2>Built for creators, studios, and agencies.</h2>
              <p>
                Access AI workflows, saved projects, team collaboration, usage meters, and secure subscriptions with credit
                tracking and billing control.
              </p>
              <Link href="/pricing" className="button secondary">
                Explore plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
