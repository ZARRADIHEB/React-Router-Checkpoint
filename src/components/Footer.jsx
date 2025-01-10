import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        &copy; <span id="year">{new Date().getFullYear()} </span> Designed By{" "}
        <span id="author"> Iheb Zarrad </span> All Right Reserved
      </footer>
    </div>
  );
};

export default Footer;
