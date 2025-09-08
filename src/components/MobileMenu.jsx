import { Link } from "react-router";
import NavItems from "../constants/NavItems";
const MobileMenu = () => {
  return (
    <nav className="md:hidden">
      <div className="flex flex-col fixed z-50 w-screen h-screen items-center gap-5 px-3 py-5 text-lg bg-gray-100">
        {NavItems.map((item, indx) => {
          return (
            <Link
              to={item.link}
              key={indx}
              className="w-full py-2 px-3 text-center rounded-lg bg-gray-300"
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default MobileMenu;
