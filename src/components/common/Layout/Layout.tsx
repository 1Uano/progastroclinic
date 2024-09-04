import { Outlet } from "@tanstack/react-router";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Layout;
