import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/test/helpers";

import SearchBar from ".";

describe("<SearchBar", () => {
  it("should renders with placeholder", () => {
    renderWithTheme(<SearchBar />);

    expect(
      screen.getByPlaceholderText(/search github username.../i)
    ).toBeInTheDocument();
  });

  it("should changes its value when typing", async () => {
    const { container } = renderWithTheme(<SearchBar />);

    const input = screen.getByPlaceholderText(/search github username.../i);
    const text = "This is my new text";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });

    expect(container).toMatchSnapshot();
  });
});
