import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { MENU_ITEMS } from "../Header.const";

describe("Header Component", () => {
  test("renders the NASA logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders menu buttons", () => {
    render(<Header />);
    MENU_ITEMS.forEach((item) => {
      const menuItem = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
    });
  });
});
