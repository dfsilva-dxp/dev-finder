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
      width: "120px",
      height: "120px",
      "border-radius": "50%",
      overflow: "hidden",
      padding: "4px"
    });

    expect(container.parentElement).toMatchSnapshot();
  });
});
