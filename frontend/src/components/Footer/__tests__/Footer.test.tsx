import { render } from "@testing-library/react";
import { Footer } from "../Footer";
import { footerStrings } from "../../../strings/strings";

describe("Footer component", () => {
  it("renders footer text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(footerStrings.footer_text)).toBeInTheDocument();
  });

  it("renders LinkedIn icon", () => {
    const { getByTitle } = render(<Footer />);
    expect(getByTitle(footerStrings.linkedin)).toBeInTheDocument();
  });
});
