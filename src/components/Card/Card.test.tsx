import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";

import Card from ".";

import userMock from "./mock";

describe("<Card/>", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<Card user={userMock} />);

    expect(
      screen.getByRole("img", { name: /User Avatar/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: userMock.name })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: userMock.login })).toHaveAttribute(
      "href",
      userMock.html_url
    );

    expect(screen.getByText(userMock.bio)).toBeInTheDocument();

    expect(screen.getByText(/repos/i)).toBeInTheDocument();
    expect(screen.getByText(userMock.public_repos)).toBeInTheDocument();

    expect(screen.getByText(/followers/i)).toBeInTheDocument();
    expect(screen.getByText(userMock.followers)).toBeInTheDocument();

    expect(screen.getByText(/following/i)).toBeInTheDocument();
    expect(screen.getByText(userMock.following)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
