import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import Header from ".";

describe("<Header/>", () => {
  it("should render a heading", () => {
    renderWithTheme(<Header />);

    expect(
      screen.getByRole("heading", { name: /devFinder/i })
    ).toBeInTheDocument();
  });

  it("should render a button", () => {
    renderWithTheme(<Header />);

    expect(screen.getByRole("button", { name: /dark/i })).toBeInTheDocument();
  });
});
