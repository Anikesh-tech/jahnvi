import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="left">📞 +91-9451355768</div>

      <div className="center">🎨 Artist Jahanvi</div>

      <div className="right">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-instagram"
        ></a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-linkedin"
        ></a>
        <a href="mailto:jahanvi@gmail.com">📧</a>

        {/* Use Link for routing to /auth */}
        <Link to="/auth">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
