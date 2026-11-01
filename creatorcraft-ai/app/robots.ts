export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://creatorcraft-ai.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/_next/"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
