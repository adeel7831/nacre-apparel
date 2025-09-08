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
      <div className="flex justify-between items-center px-3 md:px-8 lg:px-10 xl:px-12 py-5  bg-gray-100">
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
        <div className="md:hidden" onClick={mobileMenuToggler}>
          {mobileMenuOpen ? (
            <MdOutlineClose className="h-7 w-7" />
          ) : (
            <RiMenu3Fill className="h-7 w-7" />
          )}
        </div>
      </div>
      {mobileMenuOpen && <MobileMenu />}
    </>
  );
};
export default Header;
