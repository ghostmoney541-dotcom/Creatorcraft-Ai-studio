export default function manifest() {
  return {
    name: "CreatorCraft AI",
    short_name: "CreatorCraft",
    description: "AI creative studio for branding, music, video, marketing, and development workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090d",
    theme_color: "#c9a66b",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
