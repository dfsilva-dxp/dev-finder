import usePersistedState from "hooks/usePersistedState";
import { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "routes/Router";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { Dark, GlobalStyles, Light } from "styles";

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", Dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? Dark : Light);
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router onToggleTheme={toggleTheme} theme={theme.title} />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
