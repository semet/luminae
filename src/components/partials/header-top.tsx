import { FC, ReactNode } from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import DesktopMenuTop from "./desktop-menu-top";
import SocialButtonsTop from "./social-buttons-top";
import { FaAlignJustify } from "react-icons/fa";
import ShoppingCart from "./header-gray-right-cart";

type Props = {
   children?: ReactNode;
};

const HeaderTop: FC<Props> = () => {
   return (
      <div className="main-padding py-[30px] flex flex-row sm:flex-col xl:flex-row gap-[1.1rem] justify-between items-center">
         <div className="flex sm:hidden text-[1.5rem]">
            <FaAlignJustify />
         </div>
         <div className="flex sm:justify-between xl:justify-start gap-20 items-center w-auto sm:w-full">
            {/* Logo */}
            <Logo />
            {/* Search Bar */}
            <div className="hidden sm:flex">
               <SearchBar />
            </div>
         </div>
         <div className="hidden sm:flex xl:gap-32 items-center justify-end w-full">
            {/* Desktop Menu Top */}
            <DesktopMenuTop />
            {/* Social Buttons */}
            <SocialButtonsTop />
         </div>
         <div className="block sm:hidden">
            <ShoppingCart />
         </div>
      </div>
   );
};

export default HeaderTop;
