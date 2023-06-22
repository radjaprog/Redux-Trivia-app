import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar bg-light">
        <li className="navbar-brand">
          <Link to="/">TriviaApp</Link>
        </li>
      </ul>
    </div>
  );
}
