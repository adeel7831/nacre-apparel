import { Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
