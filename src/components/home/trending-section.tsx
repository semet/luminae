import Link from "next/link";
import TrendingCard from "./trending-card";
import SectionShell from "../shared/section-shell";

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
      <SectionShell link="#" title="Trending must-haves">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {items.map((item) => (
               <TrendingCard key={item.title} {...item} />
            ))}
         </div>
      </SectionShell>
   );
};
export default TrendingSection;
