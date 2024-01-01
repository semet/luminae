import SectionShell from "@/components/shared/section-shell";
import { render, screen } from "@testing-library/react";

describe("section-shell", () => {
   it("should render correctly", () => {
      render(<SectionShell link="#" title="test title" />);

      const element = screen.getByTestId("section-shell");
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent("test title");
   });
});
