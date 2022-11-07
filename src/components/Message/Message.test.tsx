import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";
import Message from ".";

describe("<Message/>", () => {
  it("should render currectly", () => {
    renderWithTheme(<Message text="Pesquise por um username!" />);

    expect(screen.getByText("Pesquise por um username!")).toBeInTheDocument();

    expect(screen.getByText("Pesquise por um username!")).toHaveStyle({
      "text-align": "center",
      padding: "0.5rem",
      "font-size": "0.75rem",
      "text-transform": "uppercase",
      "font-weight": "700"
    });
  });
});
