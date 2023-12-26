import { FC, ReactNode } from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import DesktopMenuTop from "./desktop-menu-top";
import SocialButtonsTop from "./social-buttons-top";

type Props = {
   children?: ReactNode;
};

const HeaderTop: FC<Props> = () => {
   return (
      <div className="main-padding py-[30px] flex flex-col xl:flex-row gap-[1.1rem] justify-between items-center">
         <div className="flex justify-between xl:justify-start gap-20 items-center w-full">
            {/* Logo */}
            <Logo />
            {/* Search Bar */}
            <SearchBar />
         </div>
         <div className="flex xl:gap-32 items-center justify-end w-full">
            {/* Desktop Menu Top */}
            <DesktopMenuTop />
            {/* Social Buttons */}
            <SocialButtonsTop />
         </div>
      </div>
   );
};

export default HeaderTop;
