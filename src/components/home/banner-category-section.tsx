import BannerCategoryCard from "./banner-category-card";

const items = [
   {
      title: "Never-Ending Summer",
      subtitle: "Throwback Shirts & all-day dressed",
      image: "/images/banner/category/category_1.png",
      color: "bg-[#BF2E3B]",
   },
   {
      title: "The most famous sport brands",
      subtitle: "Get in gym essentials",
      image: "/images/banner/category/category_2.png",
      color: "bg-[#1D5159]",
   },
];

const BannerCategorySection = () => {
   return (
      <div className="py-16 main-padding flex flex-col md:flex-row items-center w-full gap-5">
         {items.map((item) => (
            <BannerCategoryCard {...item} key={item.title} />
         ))}
      </div>
   );
};
export default BannerCategorySection;
