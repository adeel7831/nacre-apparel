import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";
import NavItems from "../constants/NavItems";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuToggler = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-center px-3 md:px-8 lg:px-10 xl:px-12 py-5 border-b border-b-gray-300 bg-gray-100">
        <Link to="/">Nacre Apparel</Link>

        <nav className="hidden md:block">
          <div className="flex items-center gap-5 px-3 py-5">
            {NavItems.map((item, indx) => {
              return (
                <Link
                  to={item.link}
                  key={indx}
                  className=" pr-5 border-r border-gray-300 "
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
        <div onClick={mobileMenuToggler} className="md:hidden relative w-7 h-7">
          <RiMenu3Fill
            className={`absolute h-7 w-7 transition-all duration-500 ease-in-out
            ${mobileMenuOpen ? "opacity-0  scale-0" : "opacity-100  scale-100"}`}
          />
          <MdOutlineClose
            className={`absolute h-7 w-7 transition-all duration-500 ease-in-out
            ${mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0  scale-0"}`}
          />
        </div>
      </div>
      <MobileMenu
        isOpen={mobileMenuOpen}
        mobileMenuToggler={mobileMenuToggler}
      />
    </>
  );
};
export default Header;
