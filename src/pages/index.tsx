import HomeHeroSection from "@/components/home/hero-section";
import MainLayout from "@/components/layouts/main-layout";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
   return (
      <MainLayout>
         {/* Hero */}
         <HomeHeroSection />
         {/* Flash */}
         {/* Trending */}
      </MainLayout>
   );
};

export default Home;
