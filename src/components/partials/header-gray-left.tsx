import { FaList } from "react-icons/fa";

const HeaderGrayLeft = () => {
   return (
      <div className="flex justify-start lg:justify-between gap-6 text-gray-300 items-center">
         <div className="flex gap-2 items-center">
            <FaList className="text-lg lg:text-2xl" />
            <span className="text-lg lg:text-2xl font-semibold">Categories</span>
         </div>
         <div className="flex">
            <div>
               <select className="select select-bordered text-[.8rem] select-sm w-full max-w-xs bg-base-800">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>IDR</option>
               </select>
            </div>
            <div>
               <select className="select select-bordered text-[.8rem] select-sm w-full max-w-xs bg-base-800">
                  <option>English</option>
                  <option>France</option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default HeaderGrayLeft;
