import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
   return (
      <div className="flex flex-shrink items-center border rounded px-4 py-[0.2em] relative h-[2.5rem] max-w-[28rem] overflow-hidden">
         <input
            type="text"
            className="flex-grow !outline-none placeholder:text-gray-400"
            placeholder="Search Products"
         />
         <div className="flex items-center divide-x-2">
            <select className="select max-w-xs rounded-none">
               <option>All Categories</option>
               <option>Homer</option>
               <option>Marge</option>
               <option>Bart</option>
               <option>Lisa</option>
               <option>Maggie</option>
            </select>
            <div className="text-gray-400 pl-4 text-xl">
               <FaSearch />
            </div>
         </div>
      </div>
   );
};

export default SearchBar;
