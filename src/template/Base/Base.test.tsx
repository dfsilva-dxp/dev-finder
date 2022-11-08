import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/test/helpers";

import { Base } from "template";

jest.mock("components/SearchForm", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <form data-testid="Mock Form"></form>;
    }
  };
});

describe("<Base/>", () => {
  it("should render header and content", () => {
    const onToggleTheme = jest.fn();
    const { container } = renderWithTheme(
      <Base onToggleTheme={onToggleTheme} theme="dark" />
    );

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
    expect(header.parentElement).toHaveStyle({
      width: "100%",
      "max-width": "45rem",
      height: "100%",
      margin: "0 auto",
      padding: "2.5rem 1rem"
    });

    expect(container).toMatchSnapshot();
  });
});
