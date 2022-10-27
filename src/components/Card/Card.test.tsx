import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import Card from ".";

describe("<Card/>", () => {
  it("should render currectly", () => {
    renderWithTheme(<Card />);

    expect(
      screen.getByRole("img", { name: /user avatar/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /daniel silva/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "dfsilva-dxp" })).toHaveAttribute(
      "href",
      "/link"
    );

    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipis/i)
    ).toBeInTheDocument();
  });
});
