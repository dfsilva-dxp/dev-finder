import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/test/helpers";

import { Base } from "template";

jest.mock("components/Header", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <header />;
    }
  };
});

describe("<Base/>", () => {
  it("should render header and content", () => {
    renderWithTheme(<Base />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
    expect(header.parentElement).toHaveStyle({
      "max-width": "71.25rem",
      padding: "2.5rem 1rem"
    });
  });
});
