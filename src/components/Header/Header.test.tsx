import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import Header from ".";

describe("<Header/>", () => {
  it("should render a heading", () => {
    const onToggleTheme = jest.fn();
    renderWithTheme(<Header onToggleTheme={onToggleTheme} />);

    expect(
      screen.getByRole("heading", { name: /devFinder/i })
    ).toBeInTheDocument();
  });

  it("should render a button", () => {
    const onToggleTheme = jest.fn();
    renderWithTheme(<Header onToggleTheme={onToggleTheme} />);

    expect(screen.getByRole("button", { name: /dark/i })).toBeInTheDocument();
  });
});
