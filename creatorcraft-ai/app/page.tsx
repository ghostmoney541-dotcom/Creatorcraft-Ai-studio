“use client”;

import { useState } from “react”;

const tools = [
{ name: “AI Music Lab”, description: “Develop original music concepts and track ideas.”, icon: “♫” },
{ name: “Lyric Architect”, description: “Shape lyrics, hooks, verses, and song structures.”, icon: “✍” },
{ name: “Music Video Studio”, description: “Plan cinematic music videos and visual scenes.”, icon: “▶” },
{ name: “Video Editor”, description: “Organize clips, scenes, and short-form content.”, icon: “▣” },
{ name: “Jingle Foundry”, description: “Develop memorable advertising and brand jingle concepts.”, icon: “♪” },
{ name: “Brand Forge”, description: “Explore logos, visual identities, and brand concepts.”, icon: “⚒” },
{ name: “Website Builder”, description: “Plan websites for creators and small businesses.”, icon: “⌘” },
{ name: “Growth Engine”, description: “Build content calendars and marketing plans.”, icon: “↗” },
];

export default function Home() {
const [selected, setSelected] = useState(“AI Music Lab”);
const [idea, setIdea] = useState(””);
const [message, setMessage] = useState(””);

function createProject() {
if (!idea.trim()) {
setMessage(“Enter a project idea first.”);
return;
}
setMessage(Project brief created for ${selected}: ${idea});
}

return (
✦ CREATORCRAFT AI
CREATIVE STUDIO / 001
  <section className="hero">
    <p className="eyebrow">YOUR VISION. YOUR UNIVERSE.</p>
    <h1>Make something<br /><span>unforgettable.</span></h1>
    <p className="intro">
      One studio for your music, visuals, brand, and next big idea.
      Bring your imagination. Build what comes next.
    </p>
    <a className="primary-button" href="#studio">ENTER THE STUDIO ↘</a>
    <div className="sigil" aria-hidden="true">✳</div>
  </section>
  <section className="studio" id="studio">
    <div className="section-heading">
      <div>
        <p className="eyebrow">THE CREATIVE ARSENAL</p>
        <h2>Choose your craft.</h2>
      </div>
      <span className="tool-count">08 TOOLS / ONE STUDIO</span>
    </div>
    <div className="tool-grid">
      {tools.map((tool) => (
        <button
          className={`tool-card ${selected === tool.name ? "selected" : ""}`}
          key={tool.name}
          onClick={() => {
            setSelected(tool.name);
            setMessage("");
          }}
        >
          <span className="tool-icon">{tool.icon}</span>
          <span className="tool-name">{tool.name}</span>
          <span className="tool-description">{tool.description}</span>
          <span className="tool-arrow">↗</span>
        </button>
      ))}
    </div>
    <div className="project-panel">
      <p className="eyebrow">START A NEW PROJECT</p>
      <h2>{selected}</h2>
      <label htmlFor="idea">Describe what you want to create</label>
      <textarea
        id="idea"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
        placeholder="Tell us your idea, mood, style, or goal..."
        rows={4}
      />
      <button className="primary-button" onClick={createProject}>
        CREATE PROJECT BRIEF ↗
      </button>
      {message && <p className="feedback" role="status">{message}</p>}
      <p className="disclaimer">
        Prototype preview: this form creates a project brief locally.
        AI generation, publishing, payments, and external services are not connected yet.
      </p>
    </div>
  </section>
  <footer className="footer">
    <span>CREATORCRAFT AI</span>
    <span>BUILT FOR THE BOLD AND IMAGINATIVE.</span>
  </footer>
</main>

);
}
  <section className="hero">
    <p className="eyebrow">YOUR VISION. YOUR UNIVERSE.</p>
    <h1>Make something<br /><span>unforgettable.</span></h1>
    <p className="intro">
      One studio for your music, visuals, brand, and next big idea.
      Bring your imagination. Build what comes next.
    </p>
    <a className="primary-button" href="#studio">ENTER THE STUDIO ↘</a>
    <div className="sigil" aria-hidden="true">✳</div>
  </section>

  <section className="studio" id="studio">
    <div className="section-heading">
      <div>
        <p className="eyebrow">THE CREATIVE ARSENAL</p>
        <h2>Choose your craft.</h2>
      </div>
      <span className="tool-count">08 TOOLS / ONE STUDIO</span>
    </div>

    <div className="tool-grid">
      {tools.map((tool) => (
        <button
          className={`tool-card ${selected === tool.name ? "selected" : ""}`}
          key={tool.name}
          onClick={() => {
            setSelected(tool.name);
            setMessage("");
          }}
        >
          <span className="tool-icon">{tool.icon}</span>
          <span className="tool-name">{tool.name}</span>
          <span className="tool-description">{tool.description}</span>
          <span className="tool-arrow">↗</span>
        </button>
      ))}
    </div>

    <div className="project-panel">
      <p className="eyebrow">START A NEW PROJECT</p>
      <h2>{selected}</h2>
      <label htmlFor="idea">Describe what you want to create</label>
      <textarea
        id="idea"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
        placeholder="Tell us your idea, mood, style, or goal..."
        rows={4}
      />
      <button className="primary-button" onClick={createProject}>
        CREATE PROJECT BRIEF ↗
      </button>
      {message && <p className="feedback" role="status">{message}</p>}
      <p className="disclaimer">
        Prototype preview: this form creates a project brief locally.
        AI generation, publishing, payments, and external services are not connected yet.
      </p>
    </div>
  </section>

  <footer className="footer">
    <span>CREATORCRAFT AI</span>
    <span>BUILT FOR THE BOLD AND IMAGINATIVE.</span>
  </footer>
</main>
