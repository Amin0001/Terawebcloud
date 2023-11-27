import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="pl-8 pr-4 py-2 shadow-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchComponent;
