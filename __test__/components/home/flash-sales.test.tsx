import FlashSales from "@/components/home/flash-sales";
import { render, screen } from "@testing-library/react";

describe("flash-sales", () => {
   it("should should render properly", () => {
      render(<FlashSales />);

      const element = screen.getByTestId("section-shell");
      expect(element).toBeInTheDocument();
      const cards = screen.getAllByTestId("flash-sale-card");
      expect(cards.length).toBe(4);
   });
});
