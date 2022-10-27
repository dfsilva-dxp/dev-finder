import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import Header from ".";

const props = {
  theme: "dark"
};

describe("<Header/>", () => {
  it("should render a heading", () => {
    const onToggleTheme = jest.fn();
    renderWithTheme(<Header onToggleTheme={onToggleTheme} {...props} />);

    expect(
      screen.getByRole("heading", { name: /devFinder/i })
    ).toBeInTheDocument();
  });
});
