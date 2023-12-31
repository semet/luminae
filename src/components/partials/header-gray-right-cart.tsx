import { HiOutlineShoppingBag } from "react-icons/hi2";

const ShoppingCart = () => {
   return (
      <button className="flex gap-[.5em] items-center text-gray-800 sm:text-base-50 ">
         <HiOutlineShoppingBag className="text-[1.5rem] lg:text-3xl" />
         <span className="hidden sm:inline-flex text-[0.75rem] md:text-[0.875rem]">
            Cart
         </span>
         <span className="badge bg-secondary-400 text-white py-[1.05em] text-[.8em]">
            5
         </span>
      </button>
   );
};

export default ShoppingCart;
