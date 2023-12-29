import Link from "next/link";

const menus = [
   {
      label: "Woman",
      link: "#",
      submenus: [
         // {
         //    category: {
         //       name: "Shoe & Bag",
         //       menus: [
         //          {
         //             label: "Casual Shoes",
         //             link: "#",
         //          },
         //          {
         //             label: "Boots",
         //             link: "#",
         //          },
         //          {
         //             label: "Sandals",
         //             link: "#",
         //          },
         //          {
         //             label: "Slippers",
         //             link: "#",
         //          },
         //       ],
         //    },
         // },
         // {
         //    category: {
         //       name: "Home Textile",
         //       menus: [
         //          {
         //             label: "Bedding",
         //             link: "#",
         //          },
         //          {
         //             label: "Pillows",
         //             link: "#",
         //          },
         //          {
         //             label: "Handkerchief Towels",
         //             link: "#",
         //          },
         //          {
         //             label: "Curtain",
         //             link: "#",
         //          },
         //       ],
         //    },
         // },
         // {
         //    category: {
         //       name: "Party Supplies",
         //       menus: [
         //          {
         //             label: "Event & Party",
         //             link: "#",
         //          },
         //          {
         //             label: "Christmas",
         //             link: "#",
         //          },
         //          {
         //             label: "Artificial Decorations",
         //             link: "#",
         //          },
         //          {
         //             label: "Wedding",
         //             link: "#",
         //          },
         //       ],
         //    },
         // },
         // {
         //    category: {
         //       name: "Clothes",
         //       menus: [
         //          {
         //             label: "Bottoms",
         //             link: "#",
         //          },
         //          {
         //             label: "Women's Clothing",
         //             link: "#",
         //          },
         //          {
         //             label: "T-Shirts and Tops",
         //             link: "#",
         //          },
         //          {
         //             label: "Dresses",
         //             link: "#",
         //          },
         //       ],
         //    },
         // },
         // {
         //    category: {
         //       name: "Luxury & designer",
         //       menus: [
         //          {
         //             label: "Towels",
         //             link: "#",
         //          },
         //          {
         //             label: "Bathroom Scales",
         //             link: "#",
         //          },
         //          {
         //             label: "Bath Mats",
         //             link: "#",
         //          },
         //          {
         //             label: "Shower Caps",
         //             link: "#",
         //          },
         //       ],
         //    },
         // },
         // {
         //    category: {
         //       name: "Cosmetics",
         //       menus: [
         //          {
         //             label: "Shampoo and Conditioner",
         //             link: "#",
         //          },
         //          {
         //             label: "Styling Products",
         //             link: "#",
         //          },
         //          {
         //             label: "Hair Accessories",
         //             link: "#",
         //          },
         //          {
         //             label: "Men's Grooming",
         //             link: "#",
         //          },
         //       ],
         //    },
         // },
         // {
         //    category: {
         //       name: "Sport & Outdoors",
         //       menus: [
         //          {
         //             label: "Team Sports",
         //             link: "#",
         //          },
         //          {
         //             label: "Water Sports",
         //             link: "#",
         //          },
         //          {
         //             label: "Outdoor Recreation",
         //             link: "#",
         //          },
         //          {
         //             label: "Fitness Equipment",
         //             link: "#",
         //          },
         //       ],
         //    },
         // },
      ],
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
         <ul className="flex flex-nowrap gap-[3.74rem] whitespace-nowrap overflow-x-auto overflow-y-hidden">
            {menus.map((menu) => (
               <li key={menu.label} className="z-50">
                  <div className="dropdown dropdown-hover">
                     <div tabIndex={0}>{menu.label}</div>
                     {menu.submenus ? (
                        <ul
                           tabIndex={0}
                           className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                           <li>
                              <a>Item 1</a>
                           </li>
                           <li>
                              <a>Item 2</a>
                           </li>
                        </ul>
                     ) : null}
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
export default DesktopMenuBottom;
