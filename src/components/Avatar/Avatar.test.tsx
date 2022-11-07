import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import Avatar from ".";

describe("<Avatar/>", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<Avatar url_img="my_url" />);

    expect(screen.getByRole("img", { name: /user avatar/i })).toHaveAttribute(
      "src",
      "my_url"
    );

    expect(
      screen.getByRole("img", { name: /user avatar/i }).parentElement
    ).toHaveStyle({
      border: "2px solid #E0E0E0",
      width: "90px",
      height: "90px",
      "border-radius": "50%",
      overflow: "hidden",
      padding: "4px"
    });

    expect(container).toMatchSnapshot();
  });
});
