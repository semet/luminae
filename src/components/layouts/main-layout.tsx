import { ReactNode } from "react";
import HeaderTop from "../partials/header-top";
import HeaderGray from "../partials/header-gray";
import DesktopMenuBottom from "../partials/desktop-menu-bottom";

type Props = {
   children?: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         {/* Header */}
         <HeaderTop />
         {/* Header Gray */}
         <HeaderGray />
         {/* Desktop Menu bottom */}
         <DesktopMenuBottom />
         {children}
      </div>
   );
};

export default MainLayout;
