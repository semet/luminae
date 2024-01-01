import BannerCategoryTwo from "@/components/home/banner-cateegory-two";
import { render, screen } from "@testing-library/react";

describe("test banner category two", () => {
   it("renders properly", () => {
      render(<BannerCategoryTwo />);

      expect(screen.getByTestId("banner-category-two")).toBeInTheDocument();
      const categoryCards = screen.getAllByTestId("banner-category-card");
      expect(categoryCards.length).toEqual(2);
   });
});
