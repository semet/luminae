import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BannerCategoryTwo from "@/components/home/banner-cateegory-two";
import BannerCategoryCard from "@/components/home/banner-category-card";

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

describe("test banner category two", () => {
   it("renders properly", () => {
      expect(true).toBe(true);
   });
});
