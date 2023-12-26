import Link from "next/link";
import React from "react";

const menus = [
   {
      label: "About Us",
      link: "#",
   },
   {
      label: "Blog",
      link: "#",
   },
   {
      label: "Contact Us",
      link: "#",
   },
   {
      label: "Help & Support",
      link: "#",
   },
];

const DesktopMenuTop = () => {
   return (
      <div className="flex w-full xl:w-auto gap-4 lg:gap-[1.2rem] xl:gap-[2rem] text-sm md:text-[1rem] lg:text-[0.875rem] text-gray-500">
         {menus.map((menu) => (
            <Link href={menu.link} key={menu.label} className="whitespace-nowrap">
               {menu.label}
            </Link>
         ))}
      </div>
   );
};

export default DesktopMenuTop;
