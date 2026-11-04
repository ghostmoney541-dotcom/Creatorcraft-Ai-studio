"use client";

import { useState } from "react";

const tools = [
  {
    name: "AI Music Lab",
    description: "Develop original music concepts and track ideas.",
    icon: "♫",
  },
  {
    name: "Lyric Architect",
    description: "Shape lyrics, hooks, verses, and song structures.",
    icon: "✍",
  },
  {
    name: "Music Video Studio",
    description: "Plan cinematic music videos and visual scenes.",
    icon: "▶",
  },
  {
    name: "Video Editor",
    description: "Organize clips, scenes, and short-form content.",
    icon: "▣",
  },
  {
    name: "Jingle Foundry",
    description: "Develop memorable advertising and brand jingle concepts.",
    icon: "♪",
  },
  {
    name: "Brand Forge",
    description: "Explore logos, visual identities, and brand concepts.",
    icon: "⚒",
  },
  {
    name: "Website Builder",
    description: "Plan websites for creators and small businesses.",
    icon: "⌘",
  },
  {
    name: "Growth Engine",
    description: "Build content calendars and marketing plans.",
    icon: "↗",
  },
];

export default function Home() {
  const [selected, setSelected] = useState("AI Music Lab");
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  async function createProject() {
    if (!idea.trim()) {
      setError("Enter a project idea first.");
      setResult("");
      return;
    }

    setIsGenerating(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: selected, idea }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Generation failed. Please try again.");
      }

      setResult(data.result);
    } catch (generationError) {
      setError(
        generationError instanceof Error
          ? generationError.message
          : "Generation failed. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <span>✦ CREATORCRAFT AI</span>
        <span>CREATIVE STUDIO / 001</span>
      </header>

      <section className="hero">
        <p className="eyebrow">YOUR VISION. YOUR UNIVERSE.</p>
        <h1>
          Make something
          <br />
          <span>unforgettable.</span>
        </h1>
        <p className="intro">
          One studio for your music, visuals, brand, and next big idea.
          Bring your imagination. Build what comes next.
        </p>
        <a className="primary-button" href="#studio">
          ENTER THE STUDIO ↘
        </a>
        <div className="sigil" aria-hidden="true">
          ✳
        </div>
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
                setError("");
                setResult("");
              }}
              type="button"
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
            maxLength={4000}
          />
          <button
            className="primary-button"
            onClick={createProject}
            type="button"
            disabled={isGenerating}
          >
            {isGenerating ? "CREATING YOUR BRIEF…" : "CREATE PROJECT BRIEF ↗"}
          </button>
          {error && (
            <p className="feedback" role="alert">
              {error}
            </p>
          )}
          {result && (
            <div className="feedback" role="status" aria-live="polite">
              <h3>Your {selected} brief</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{result}</p>
            </div>
          )}
          <p className="disclaimer">
            AI-generated creative concepts. Music and video tools create plans
            and text, not audio or video files.
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
