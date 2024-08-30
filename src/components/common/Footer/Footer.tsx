import React from "react";

import "./Footer.styles.scss";

const Footer = () => {
  const themeClass = "b-footer";

  return (
    <footer className={themeClass}>
      <span className={`${themeClass}_text`}>©2023 від ProGastro.</span>
    </footer>
  );
};
export default Footer;
