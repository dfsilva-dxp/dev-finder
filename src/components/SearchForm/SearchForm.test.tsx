import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "utils/test/helpers";

import SearchForm from ".";

describe("<SearchForm", () => {
  it("should renders with placeholder", () => {
    renderWithTheme(<SearchForm />);

    expect(
      screen.getByPlaceholderText(/search github username.../i)
    ).toBeInTheDocument();
  });

  it("should changes its value when typing", async () => {
    const { container } = renderWithTheme(<SearchForm />);

    const input = screen.getByPlaceholderText(/search github username.../i);
    const text = "This is my new text";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });

    expect(container).toMatchSnapshot();
  });
});
