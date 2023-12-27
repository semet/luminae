import Link from "next/link";

const menus = [
   {
      label: "Woman",
      link: "#",
   },
   {
      label: "Man",
      link: "#",
   },
   {
      label: "Mother-Child",
      link: "#",
   },
   {
      label: "Home & Furniture",
      link: "#",
   },
   {
      label: "Super Market",
      link: "#",
   },
   {
      label: "Cosmetics",
      link: "#",
   },
   {
      label: "Shoe & Bag",
      link: "#",
   },
   {
      label: "Electronic",
      link: "#",
   },
   {
      label: "Sport & Outdoor",
      link: "",
   },
   {
      label: "Best Seller",
      link: "",
   },
];

const DesktopMenuBottom = () => {
   return (
      <div className="hidden sm:block main-padding pt-[30px] pb-2">
         <ul className="flex gap-[3.74rem] overflow-auto whitespace-nowrap">
            {menus.map((menu) => (
               <li key={menu.label}>
                  <Link
                     href={menu.link}
                     key={menu.label}
                     className="text-base-700 text-[.88rem] hover:text-selected"
                  >
                     {menu.label}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};
export default DesktopMenuBottom;
