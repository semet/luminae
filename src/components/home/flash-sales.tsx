import { useEffect } from "react";
import FlashSaleCard from "./flash-sale-card";
import Link from "next/link";

const sales = [
   {
      endHour: "12 43 12",
      title: "Tonny Black",
      image: "/images/products/1.png",
      category: "Shoulder bag-White-Plain",
      actual: 69.99,
      price: 129.99,
      discount: 40,
   },
   {
      endHour: "02 35 32",
      title: "Reebok",
      image: "/images/products/2.png",
      category: "Women’s Powder sneakers",
      actual: 112.02,
      price: 129.99,
      discount: 40,
   },
   {
      endHour: "12 14 21",
      title: "Pasto",
      image: "/images/products/3.png",
      category: "Shoulder bag-Pink-Plain",
      actual: 69.99,
      price: 129.99,
      discount: 40,
   },
   {
      endHour: "12 14 21",
      title: "Sketchers",
      image: "/images/products/4.png",
      category: "Sport-shoe 2102",
      actual: 80.0,
      price: 129.99,
      discount: 40,
   },
];
const FlashSales = () => {
   return (
      <div className="main-padding mt-20 flex flex-col gap-12">
         <div className="flex justify-between items-end w-full px-1">
            <h3 className="text-[1.75rem]">Flash Sales</h3>
            <Link href="#" className="text-sm">
               View all &#x203A;
            </Link>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {sales.map((sale) => (
               <FlashSaleCard key={sale.title} {...sale} />
            ))}
         </div>
      </div>
   );
};
export default FlashSales;
