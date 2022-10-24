import { render, screen } from "@testing-library/react";

import Heading from ".";

describe("Heading", () => {
  it("should render currectly", () => {
    const { container } = render(<Heading />);

    expect(
      screen.getByRole("heading", { name: /heading/i })
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
