import FlashInfoSection from "@/components/home/flash-info-section";
import { render, screen } from "@testing-library/react";

describe("test banner category ", () => {
   it("renders properly", () => {
      render(<FlashInfoSection />);

      expect(screen.getByTestId("flash-info-section")).toBeInTheDocument();
   });
});
