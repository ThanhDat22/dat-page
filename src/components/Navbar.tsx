import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const itemClass = (to: string) =>
    `px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40
    hover:text-amber-400 ${pathname === to ? "text-amber-400" : "text-neutral-200"}`;


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/70 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.jpg" alt="Dat" className="h-6 w-6" />
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link className={itemClass("/")} to="/">Home</Link>
          <Link className={itemClass("/projects")} to="/projects">Projects</Link>
          <Link className={itemClass("/education")} to="/education">Education</Link>
          <Link className={itemClass("/about")} to="/about">About Me</Link>
        </div>
      </div>
    </nav>

  );
}
