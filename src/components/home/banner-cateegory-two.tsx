import BannerCategoryCard from "./banner-category-card";

const items = [
   {
      title: "The Pinky Barbie Edition",
      subtitle: "Lets play dress up",
      image: "/images/banner/category/category_3.png",
      color: "bg-[#D11FB5]",
   },
   {
      title: "Best Sellers Everyone Love",
      subtitle: "poolside glam include",
      image: "/images/banner/category/category_4.png",
      color: "bg-[#0186C4]",
   },
];

const BannerCategoryTwo = () => {
   return (
      <div className="-mt-10 md:-mt-0 md:py-16 main-padding flex flex-col md:flex-row w-full gap-5">
         {items.map((item) => (
            <BannerCategoryCard {...item} key={item.title} />
         ))}
      </div>
   );
};
export default BannerCategoryTwo;
