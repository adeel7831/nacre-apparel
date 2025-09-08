import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

const NavItems = [
  {
    title: "Home",
    link: "/",
    icon: <IoHomeOutline />,
  },
  {
    title: "Products",
    link: "/products",
    icon: <GiClothes />,
  },
  {
    title: "About",
    link: "/about",
    icon: <IoMdInformationCircleOutline />,
  },
  {
    title: "Contact Us",
    link: "/contact-us",
    icon: <IoMdContact />,
  },
];
export default NavItems;
