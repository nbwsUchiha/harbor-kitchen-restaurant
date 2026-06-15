import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/">Harbor Kitchen</Link>
        <nav>
          <Link to="/catalog">Menu</Link>
          
          <Link to="/login">Account</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
