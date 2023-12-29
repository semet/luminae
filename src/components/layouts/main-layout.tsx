import { ReactNode } from "react";
import HeaderTop from "../partials/header-top";
import HeaderGray from "../partials/header-gray";
import DesktopMenuBottom from "../partials/desktop-menu-bottom";
import SearchBar from "../partials/search-bar";
import FooterContainer from "../partials/footer";
import MainFooter from "../partials/main-footer";
import NewsLetter from "../partials/news-letter";
import FooterBottom from "../partials/footer-bottom";

type Props = {
   children?: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         {/* Header */}
         {/* TODO: Consider make it has Children prop to place search bar here */}
         <HeaderTop />
         {/* Search Bar on Mobile Only */}
         <div className="main-padding flex sm:hidden w-full mb-[2.4rem]">
            <SearchBar />
         </div>
         {/* Header Gray */}
         <HeaderGray />
         {/* Desktop Menu bottom */}
         <DesktopMenuBottom />
         {children}
         {/* footer */}
         <FooterContainer>
            {/* Newsletter */}
            <NewsLetter />
            {/* Main footer */}
            <MainFooter />
            {/* Footer bot */}
            <FooterBottom />
         </FooterContainer>
      </div>
   );
};

export default MainLayout;
