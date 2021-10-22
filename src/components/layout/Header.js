import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faInfo } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-danger navbar-expand-md mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          Contact Manager
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} style={{marginRight: "0.25em"}} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <FontAwesomeIcon icon={faPlus} style={{marginRight: "0.25em"}} />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon={faInfo} style={{marginRight: "0.25em"}} />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
