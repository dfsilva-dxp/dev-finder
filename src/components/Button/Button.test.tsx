import { screen } from "@testing-library/react";
import { SunDim } from "phosphor-react";
import { renderWithTheme } from "utils/test/helpers";

import Button from ".";

describe("<Button/>", () => {
  it("should render currectly", () => {
    renderWithTheme(<Button>Theme</Button>);

    expect(screen.getByRole("button", { name: /theme/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /theme/i })).toHaveStyle({
      "background-color": "transparent",
      border: "0",
      "font-size": "0.75rem"
    });
    expect(screen.getByRole("button", { name: /theme/i })).toHaveStyleRule(
      "outline",
      "2px solid #0178FF",
      {
        modifier: ":hover"
      }
    );
  });

  it("should render an icon", () => {
    const { container } = renderWithTheme(
      <Button icon={<SunDim size={18} data-testid="icon" />}>Theme</Button>
    );

    expect(screen.getByRole("button", { name: /theme/i })).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });
});
