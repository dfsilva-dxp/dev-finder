import { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";

import Router from "routes/Router";

import { UserProvider } from "context/userContext";

import usePersistedState from "hooks/usePersistedState";

import { Dark, GlobalStyles, Light } from "styles";

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", Dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? Dark : Light);
  }, [theme, setTheme]);

  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router onToggleTheme={toggleTheme} theme={theme.title} />
          <GlobalStyles />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
