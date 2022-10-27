import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/test/helpers";

import { Base } from "template";

describe("<Base/>", () => {
  it("should render header and content", () => {
    const onToggleTheme = jest.fn();
    const { container } = renderWithTheme(
      <Base onToggleTheme={onToggleTheme} theme="dark" />
    );

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
    expect(header.parentElement).toHaveStyle({
      width: "100%",
      "max-width": "61.9375rem",
      height: "100%",
      margin: "0 auto",
      padding: "2.5rem 1rem"
    });

    expect(container).toMatchSnapshot();
  });
});
