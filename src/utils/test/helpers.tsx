import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";

import { Dark } from "styles";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={Dark}>{children}</ThemeProvider>);
