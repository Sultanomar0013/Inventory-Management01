//Footer.js

import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
