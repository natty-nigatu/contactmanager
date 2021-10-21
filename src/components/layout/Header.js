import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          Contact Manager
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
