import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} All Rights Reserved By MJ INDUSTRY
      </p>
    </div>
  );
}

export default Footer;
