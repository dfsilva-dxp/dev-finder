import { BrowserRouter } from "react-router-dom";
import Router from "routes/Router";
import { ThemeProvider } from "styled-components";

import { Dark, GlobalStyles } from "styles";

export default function App() {
  return (
    <ThemeProvider theme={Dark}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
