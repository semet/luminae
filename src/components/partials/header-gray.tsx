import React, { FC, ReactNode } from "react";
import HeaderGrayLeft from "./header-gray-left";
import HeaderGrayMiddle from "./header-gray-middle";
import HeaderGrayRight from "./header-gray-right";

type Props = {
   children?: ReactNode;
};

const HeaderGray: FC<Props> = () => {
   return (
      <div className="main-padding py-4 hidden bg-base-800 sm:grid grid-cols-2 xl:grid-cols-3 gap-10 xl:divide-x divide-gray-500">
         {/* Left */}
         <HeaderGrayLeft />
         {/* Middle */}
         <HeaderGrayMiddle />
         {/* Right */}
         <HeaderGrayRight />
      </div>
   );
};

export default HeaderGray;
