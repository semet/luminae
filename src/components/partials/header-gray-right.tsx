import React from "react";
import SignIn from "./header-gray-right-signin";
import Favorites from "./header-gray-right-favorites";
import ShoppingCart from "./header-gray-right-cart";

const HeaderGrayRight = () => {
   return (
      <div className="pl-0 lg:pl-10 flex w-full justify-end lg:justify-between gap-6 items-center">
         {/* Sign in */}
         <SignIn />
         {/* Favorites */}
         <Favorites />
         {/* Carts */}
         <ShoppingCart />
      </div>
   );
};

export default HeaderGrayRight;
