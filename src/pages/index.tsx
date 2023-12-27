import FlashSales from "@/components/home/flash-sales";
import HomeHeroSection from "@/components/home/hero-section";
import MobileHeroSection from "@/components/home/mobile-hero-section";
import TrendingSection from "@/components/home/trending-section";
import MainLayout from "@/components/layouts/main-layout";
import { NextPage } from "next";
import React from "react";
import { useBreakpoint } from "use-breakpoint";

const Home: NextPage = () => {
   const { breakpoint } = useBreakpoint({
      mobile: 0,
      tablet: 640,
      desktop: 1280,
   });
   return (
      <MainLayout>
         {/* Hero */}
         {breakpoint === "tablet" || breakpoint === "desktop" ? (
            <HomeHeroSection />
         ) : (
            <MobileHeroSection />
         )}
         {/* Flash */}
         <FlashSales />
         {/* Trending */}
         <TrendingSection />
         <div className="h-96"></div>
      </MainLayout>
   );
};

export default Home;
