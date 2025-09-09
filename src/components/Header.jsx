import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router";
import MobileMenu from "./MobileMenu";
import NavItems from "../constants/NavItems";
import SearchBar from "./SearchBar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const mobileMenuToggler = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const openSearchBar = () => {
    setSearchBarOpen(true);
  };
  const closeSearchBar = () => {
    setSearchBarOpen(false);
  };
  return (
    <>
      <div className="relative flex justify-between items-center px-3 md:px-8 lg:px-10 xl:px-12 py-5 border-b border-b-gray-300 bg-gray-100">
        <div
          className={`${
            searchBarOpen ? "translate-y-0" : "-translate-y-full"
          }  lg:hidden absolute inset-0 flex items-center justify-center gap-5 px-5 bg-gray-100 z-10 transition-transform duration-500 ease-in-out`}
        >
          <div className="w-full max-w-96">
            <SearchBar />
          </div>
          <MdOutlineClose
            onClick={closeSearchBar}
            className="h-6 w-6 text-gray-500"
          />
        </div>
        <Link to="/" className="sm:text-medium lg:text-lg xl:text-xl">
          Nacre Apparel
        </Link>

        <div className="hidden lg:block w-full max-w-80">
          <SearchBar />
        </div>

        <nav className="hidden md:block">
          <div className="flex items-center gap-5 p-3">
            {NavItems.map((item, indx) => {
              return (
                <NavLink
                  to={item.link}
                  key={indx}
                  className={({ isActive }) =>
                    `pr-5 border-r border-gray-400 last:border-r-0  transition-colors duration-400 ease-in-out ${
                      isActive ? "font-semibold text-blue-400" : "font-normal"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </nav>
        <div className="lg:hidden flex items-center gap-5">
          <IoIosSearch onClick={openSearchBar} className=" h-7 w-7" />
          <div
            onClick={mobileMenuToggler}
            className="md:hidden relative w-7 h-7"
          >
            <RiMenu3Fill
              className={`absolute h-7 w-7 transition-all duration-500 ease-in-out
            ${
              mobileMenuOpen ? "opacity-0  scale-0" : "opacity-100  scale-100"
            }`}
            />
            <MdOutlineClose
              className={`absolute h-7 w-7 transition-all duration-500 ease-in-out
            ${mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0  scale-0"}`}
            />
          </div>
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
