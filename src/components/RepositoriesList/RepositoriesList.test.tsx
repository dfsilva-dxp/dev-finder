import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import RepositoriesList from ".";

describe("<RepositoriesList/>", () => {
  it("should render two column headers with the Name and Description texts", () => {
    renderWithTheme(<RepositoriesList />);

    expect(screen.getAllByRole("columnheader")).toHaveLength(2);

    expect(
      screen.getByRole("columnheader", { name: /name/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /description/i })
    ).toBeInTheDocument();
  });

  it("should render with currectly styles", () => {
    const { container } = renderWithTheme(<RepositoriesList />);

    expect(screen.getByRole("columnheader", { name: /name/i })).toHaveStyle({
      padding: "1rem 2rem",
      "font-weight": "500",
      "font-size": "0.875rem",
      "line-height": "1.5rem",
      "text-align": "left",
      "border-radius": "0.25rem"
    });

    expect(screen.getByRole("cell", { name: /reactjs/i })).toHaveStyle({
      background: "#393656",
      padding: "1rem 2rem",
      border: "0"
    });

    expect(container.parentNode).toMatchSnapshot();
  });
});
