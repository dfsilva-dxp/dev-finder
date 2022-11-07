import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SunDim } from "phosphor-react";
import { act } from "react-dom/test-utils";
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
      "2px solid #FE5873",
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

  it("should be accessible with tab", () => {
    renderWithTheme(<Button>Theme</Button>);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByRole("button", { name: /theme/i })).toHaveFocus();
  });

  it("should be called the fn() when button is cliecked", async () => {
    const toggleIcon = jest.fn();

    act(() => {
      renderWithTheme(<Button onClick={toggleIcon}>Theme</Button>);
    });

    const button = screen.getByRole("button", { name: /theme/i });

    act(() => {
      button.dispatchEvent(new Event("click", { bubbles: true }));
    });

    expect(toggleIcon).toHaveBeenCalledTimes(1);
  });
});
