import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuToggler = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex justify-between items-center px-3 py-5 bg-amber-300">
        <Link>Nacre Apparel</Link>

        <div onClick={mobileMenuToggler}>
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
