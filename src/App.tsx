import { useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { DefaultTheme, ThemeProvider } from "styled-components";

import Router from "routes/Router";

import { UserProvider } from "context/userContext";
import usePersistedState from "hooks/usePersistedState";

import { queryClient } from "services/queryClient";

import { Dark, GlobalStyles } from "styles";
import light from "styles/themes/light";

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", Dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? Dark : light);
  }, [theme, setTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <Router onToggleTheme={toggleTheme} theme={theme.title} />
            <GlobalStyles />
          </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
