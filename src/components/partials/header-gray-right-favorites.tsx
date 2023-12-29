import { HiOutlineHeart } from "react-icons/hi2";

const Favorites = () => {
   return (
      <button className="flex gap-[.4rem] items-center text-base-50">
         <HiOutlineHeart className="text-[1.5rem] lg:text-3xl" />
         <span className="text-[0.75rem] md:text-[0.875rem]">Favorites</span>
      </button>
   );
};

export default Favorites;
