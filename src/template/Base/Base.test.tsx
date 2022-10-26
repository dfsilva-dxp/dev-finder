import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/test/helpers";

import { Base } from "template";

describe("<Base/>", () => {
  it("should render header and content", () => {
    const { container } = renderWithTheme(<Base />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
    expect(header.parentElement).toHaveStyle({
      "max-width": "67.5rem",
      padding: "2.5rem 1rem"
    });

    expect(container).toMatchSnapshot();
  });
});
