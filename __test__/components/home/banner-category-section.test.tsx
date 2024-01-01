import BannerCategory from "@/components/home/banner-category-section";
import { render, screen } from "@testing-library/react";

describe("test banner category ", () => {
   it("renders properly", () => {
      render(<BannerCategory />);

      expect(screen.getByTestId("banner-category")).toBeInTheDocument();
      const categoryCards = screen.getAllByTestId("banner-category-card");
      expect(categoryCards.length).toEqual(2);
   });
});
