import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>CreatorCraft AI</div>
        <div>
          <Link href="/terms">Terms</Link>
          {" | "}
          <Link href="/privacy">Privacy</Link>
          {" | "}
          <Link href="/refunds">Refunds</Link>
        </div>
      </div>
    </footer>
  );
}
