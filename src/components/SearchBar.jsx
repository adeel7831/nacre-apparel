import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <div className="relative w-full flex border border-gray-300 rounded-lg bg-white items-center p-1">
      <IoIosSearch className="h-6 w-6 text-gray-500" />
      <input
        type="text"
        placeholder="search..."
        className="outline-0  w-full px-2 text-gray-500"
      />
    </div>
  );
};
export default SearchBar;
