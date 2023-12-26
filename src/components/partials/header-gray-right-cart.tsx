import { HiOutlineShoppingBag } from "react-icons/hi2";

const ShoppingCart = () => {
   return (
      <div className="flex gap-[.5em] items-center text-base-50 ">
         <HiOutlineShoppingBag className="text-[1.5rem] lg:text-3xl" />
         <span className="text-[0.75rem] md:text-[0.875rem]">Cart</span>
         <span className="badge bg-secondary-400 text-white py-[1.05em] text-[.8em]">
            5
         </span>
      </div>
   );
};

export default ShoppingCart;
