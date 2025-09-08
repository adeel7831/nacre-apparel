import { Link } from "react-router";
import NavItems from "../constants/NavItems";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

const MobileMenu = ({ mobileMenuToggler }) => {
  return (
    <nav className="md:hidden">
      <div
        onClick={mobileMenuToggler}
        className="flex flex-col fixed z-50 w-[80%]  h-screen items-center gap-3 px-3 pl-0 py-5 text-medium bg-gray-100"
      >
        {NavItems.map((item, indx) => {
          return (
            <Link
              to={item.link}
              key={indx}
              className="w-full py-2 px-5 pr-2 rounded-r-full bg-gray-200"
            >
              <div className="flex items-center justify-between ">
                {item.title}
                <div className="bg-gray-100 p-2 rounded-full">{item.icon}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default MobileMenu;
