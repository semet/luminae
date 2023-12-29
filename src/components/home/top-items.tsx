import Link from "next/link";
import SimpleProductCard from "./simple-product-card";
import SectionShell from "../shared/section-shell";

const items = [
   {
      title: "Mango",
      image: "/images/products/fashion_1.png",
      description: "Kimono & Caftan - Black - Regular fit",
      rating: 289,
      actual: 228,
      price: 290,
      discount: 10,
   },
   {
      title: "Zara",
      image: "/images/products/fashion_2.png",
      description: "Midi top- Daily fit",
      rating: 523,
      actual: 95,
      price: 145,
      discount: 7,
   },
   {
      title: "Uniqlo",
      image: "/images/products/fashion_3.png",
      description: "Midi atlas Slim fit - bohemian",
      rating: 86,
      actual: 125,
      price: 156,
      discount: 8,
   },
   {
      title: "Mango dress",
      image: "/images/products/fashion_4.png",
      description: "Kimono & Caftan - Colorful - Night club fit",
      rating: 121,
      actual: 165,
      price: 487,
      discount: 15,
   },
];

const TopItems = () => {
   return (
      <SectionShell link="#" title="Top 100">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {items.map((item) => (
               <SimpleProductCard key={item.title} {...item} />
            ))}
         </div>
      </SectionShell>
   );
};
export default TopItems;
