import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">Harbor Kitchen</p>
      <h1>Order food online for pickup or delivery.</h1>
      <p className="lede">
        Built with Vite, Cloudflare Workers, Supabase, and Stripe. Configure secrets in
        <code>.env.local</code> then deploy via GitHub Actions.
      </p>
      <div className="actions">
        <Link className="btn primary" to="/catalog">Order now</Link>
        <Link className="btn ghost" to="/login">Sign in</Link>
      </div>
    </section>
  );
}
