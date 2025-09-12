import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css"; // custom styles

function Layout() {
  return (
    <>
      {/* Header / Navbar */}
      <header className="navbar">
        <h1 className="logo">📖 Bhagavad Gita</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chapters">Chapters</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>✨ Developed with ❤️ | © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default Layout;
