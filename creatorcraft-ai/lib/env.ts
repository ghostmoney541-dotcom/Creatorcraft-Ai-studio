export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || "https://creatorcraft-ai.vercel.app";
}

export function isProductionEnv() {
  return process.env.NODE_ENV === "production";
}
