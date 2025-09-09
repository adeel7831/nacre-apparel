import { Link, NavLink } from "react-router";
import NavItems from "../constants/NavItems";

const MobileMenu = ({ isOpen, mobileMenuToggler }) => {
  return (
    <nav
      className={`md:hidden fixed z-50  left-0 h-screen w-[80%] bg-gray-100 
                  flex flex-col items-center gap-3 px-3 py-5 pl-0 text-medium
                  transform transition-transform duration-500 ease-in-out
                  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {NavItems.map((item, indx) => {
        return (
          <NavLink
            to={item.link}
            key={indx}
            className={({ isActive }) =>
              `w-full py-2 px-5 pr-2 rounded-r-full ${
                isActive ? "bg-blue-200" : "bg-gray-200"
              }`
            }
          >
            <div
              onClick={mobileMenuToggler}
              className="flex items-center justify-between "
            >
              {item.title}
              <div className="bg-gray-100 p-2 rounded-full">{item.icon}</div>
            </div>
          </NavLink>
        );
      })}
    </nav>
  );
};
export default MobileMenu;
