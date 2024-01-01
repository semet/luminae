import FlashSaleCard from "@/components/home/flash-sale-card";
import { render, screen } from "@testing-library/react";
const data = {
   endHour: "12 43 12",
   title: "Tonny Black",
   image: "/images/products/1.png",
   category: "Shoulder bag-White-Plain",
   actual: 69.99,
   price: 129.99,
   discount: 40,
};

describe("flash-sale-card", () => {
   it("should renders properly", () => {
      render(<FlashSaleCard {...data} />);

      const element = screen.getByTestId("flash-sale-card");
      expect(element).toBeInTheDocument();

      const heading = screen.getByRole("heading");
      expect(heading).toHaveTextContent(data.title);
   });
});
