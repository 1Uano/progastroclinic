import cn from "classnames";
import { Link, useLocation } from "@tanstack/react-router";
import { Route as HomeRoute } from "../../../routes";
import { Route as AboutUsRoute } from "../../../routes/about-us.tsx";
import { Route as ServicesRoute } from "../../../routes/services.tsx";
import { Route as ContactsRoute } from "../../../routes/contacts.tsx";

import "./Header.styles.scss";

const Header = () => {
  const themeClass = "b-header";

  const location = useLocation();

  return (
    <header className={themeClass}>
      <div className={`${themeClass}_top`}>
        <img
          src="/public/logo.png"
          alt="ProGastroclinic"
          className={`${themeClass}_top_logo`}
        />
      </div>
      <nav className={`${themeClass}_bottom`}>
        <ul className={`${themeClass}_bottom_inner`}>
          <li className={`${themeClass}_bottom_inner_item`}>
            <Link
              to={"/"}
              className={cn(`${themeClass}_bottom_inner_link`, {
                ["-active"]: location.pathname === HomeRoute.to,
              })}
            >
              Головна
            </Link>
          </li>
          <li className={`${themeClass}_bottom_inner_item`}>
            <Link
              to={"/about-us"}
              className={cn(`${themeClass}_bottom_inner_link`, {
                ["-active"]: location.pathname === AboutUsRoute.to,
              })}
            >
              Про нас
            </Link>
          </li>
          <li className={`${themeClass}_bottom_inner_item`}>
            <Link
              to={"/services"}
              className={cn(`${themeClass}_bottom_inner_link`, {
                ["-active"]: location.pathname === ServicesRoute.to,
              })}
            >
              Послуги
            </Link>
          </li>
          <li className={`${themeClass}_bottom_inner_item`}>
            <Link
              to={"/contacts"}
              className={cn(`${themeClass}_bottom_inner_link`, {
                ["-active"]: location.pathname === ContactsRoute.to,
              })}
            >
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
