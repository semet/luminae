import Image from "next/image";
import React from "react";

const Logo = () => {
   return (
      <div className="w-[179px] h-[33px]">
         <Image
            src="/images/logo.png"
            className="object-cover"
            width={173}
            height={33}
            alt="Luminae"
         />
      </div>
   );
};

export default Logo;
