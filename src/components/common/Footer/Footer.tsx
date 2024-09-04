import "./Footer.styles.scss";

const Footer = () => {
  const themeClass = "b-footer";

  return (
    <footer className={themeClass}>
      <span className={`${themeClass}_text`}>
        ©{new Date().getFullYear()} від ProGastro.
      </span>
    </footer>
  );
};
export default Footer;
