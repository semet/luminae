import Link from "next/link";
import TrendingCard from "./trending-card";

const items = [
   {
      title: "Cool & Sexy Calvin Klein",
      category: "Dotted dress-Casual",
      image: "/images/products/trending_1.png",
      price: 89,
      isNew: true,
   },
   {
      title: "Sexy Calvin Klein",
      category: "Dotted dress-Casual",
      image: "/images/products/trending_2.png",
      price: 89,
      isNew: false,
   },
   {
      title: "Beige coat Zara",
      category: "Cream-Brown-Formal",
      image: "/images/products/trending_3.png",
      price: 102,
      isNew: true,
   },
];

const TrendingSection = () => {
   return (
      <div className="main-padding mt-16 flex flex-col gap-12">
         <div className="flex justify-between items-end w-full px-1">
            <h3 className="text-[1.75rem]">Trending must-haves</h3>
            <Link href="#" className="text-sm">
               View all &#x203A;
            </Link>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {items.map((item) => (
               <TrendingCard key={item.title} {...item} />
            ))}
         </div>
      </div>
   );
};
export default TrendingSection;
