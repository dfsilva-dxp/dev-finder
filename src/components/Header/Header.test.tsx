import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import Header from ".";

const props = {
  theme: "dark"
};

describe("<Header/>", () => {
  it("should render currectly", () => {
    const onToggleTheme = jest.fn();
    renderWithTheme(<Header onToggleTheme={onToggleTheme} {...props} />);

    expect(
      screen.getByRole("heading", { name: /devfinder/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /light/i })).toBeInTheDocument();
  });
});
