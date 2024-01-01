import BannerCategoryCard from "@/components/home/banner-category-card";
import { render, screen } from "@testing-library/react";

const data = {
   title: "The Pinky Barbie Edition",
   subtitle: "Lets play dress up",
   image: "/images/banner/category/category_3.png",
   color: "bg-[#D11FB5]",
};

describe("banner-category-card", () => {
   it("renders properly with correct data", () => {
      render(<BannerCategoryCard {...data} />);

      const element = screen.getByTestId("banner-category-card");
      expect(element).toBeInTheDocument();

      const title = screen.getByRole("heading");
      expect(title).toHaveTextContent(data.title);

      const image = screen.getByAltText(data.title);
      expect(image).toBeInTheDocument();

      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
   });
});
