/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const HeaderGrayMiddle = () => {
   return (
      <div className="pl-10 hidden xl:flex gap-5 items-start">
         <Image
            src="/images/promo/1.png"
            className="object-cover w-[62px]"
            width={64}
            height={62}
            alt="promos"
         />
         <div className="flex flex-col gap-2">
            <span className="text-gray-300 text-[1.04em] font-semibold tracking-wide">
               Weekly Men's Toiletries Coupons.
            </span>
            <p className="text-base-400">
               We extend exclusive discounts to our male clientele
            </p>
         </div>
      </div>
   );
};

export default HeaderGrayMiddle;
