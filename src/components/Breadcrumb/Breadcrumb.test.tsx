import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { renderWithTheme } from "utils/test/helpers";

import Breadcrumb from ".";

describe("<Breadcrumb/>", () => {
  it("should render currectly", () => {
    renderWithTheme(
      <BrowserRouter>
        <Breadcrumb />
      </BrowserRouter>
    );

    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/"
    );
  });
});
