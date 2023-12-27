import MobileHeroCard from "./mobile-hero-card";

const cards = [
   {
      image: "/images/banner/mobile/1.png",
      title: "Never-Ending Summer",
      description: "Throwback Shirts & all-day dressed",
      color: "#BF2E3B",
   },
   {
      image: "/images/banner/mobile/2.png",
      title: "Best Lovin Sellers",
      description: "Bikini & Poolside glam include",
      color: "#0186C4",
   },
];

const MobileHeroSection = () => {
   return (
      <div className="main-padding flex flex-col gap-5 mt-12">
         {cards.map((card) => (
            <MobileHeroCard key={card.title} {...card} />
         ))}
      </div>
   );
};
export default MobileHeroSection;
