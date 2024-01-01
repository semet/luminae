import HomeHeroSection from "@/components/home/hero-section";
import { render, screen } from "@testing-library/react";

describe("hero section", () => {
   it("should render properly", () => {
      render(<HomeHeroSection />);

      const element = screen.getByTestId("hero-section");
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent("Kimonos, Caftans & Pareos");

      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
   });
});
