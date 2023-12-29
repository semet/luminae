import BannerCategoryTwo from "@/components/home/banner-cateegory-two";
import BannerCategorySection from "@/components/home/banner-category-section";
import FlashInfoSection from "@/components/home/flash-info-section";
import FlashSales from "@/components/home/flash-sales";
import HomeHeroSection from "@/components/home/hero-section";
import MobileHeroSection from "@/components/home/mobile-hero-section";
import TopItems from "@/components/home/top-items";
import TrendingSection from "@/components/home/trending-section";
import MainLayout from "@/components/layouts/main-layout";
import { NextPage } from "next";
import Head from "next/head";
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
         <Head>
            <title>Luminae</title>
         </Head>
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
         {/* Top Items */}
         <TopItems />
         {/* Banner */}
         <BannerCategorySection />
         {/* Flash Info */}
         <FlashInfoSection />
         {/* Banner */}
         <BannerCategoryTwo />
      </MainLayout>
   );
};

export default Home;
