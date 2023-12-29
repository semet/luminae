import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type Props = {
   title: string;
   subtitle: string;
   image: string;
   color: string;
};

const BannerCategoryCard: FC<Props> = ({ color, image, subtitle, title }) => {
   return (
      <div className="flex w-full">
         <div className={`w-1/2  px-5 py-20 flex flex-col justify-between ${color}`}>
            <h3 className="text-4xl font-semibold leading-snug text-white">
               {title}
            </h3>
            <span className="text-2xl font-thin text-gray-200">{subtitle}</span>
            <Link href="#" className="text-white underline">
               Explore all category
            </Link>
         </div>
         <div className="w-1/2">
            <Image
               src={image}
               width={310}
               height={383}
               alt={title}
               className="h-full w-full object-cover"
            />
         </div>
      </div>
   );
};
export default BannerCategoryCard;
