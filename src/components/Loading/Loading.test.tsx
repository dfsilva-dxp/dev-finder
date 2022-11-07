import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";
import Loading from ".";

describe("<Loading/>", () => {
  it("should render currectly", () => {
    renderWithTheme(<Loading />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    expect(screen.getByText("Loading...")).toHaveStyle({
      "text-align": "center",
      padding: "0.5rem",
      "font-size": "0.75rem",
      "text-transform": "uppercase",
      "font-weight": "700"
    });
  });
});
