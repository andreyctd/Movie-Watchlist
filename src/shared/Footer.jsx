import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        🎬 Movie Watchlist App &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
