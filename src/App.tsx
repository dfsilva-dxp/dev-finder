import Heading from "components/Heading";
import { ThemeProvider } from "styled-components";
import { Dark, GlobalStyles } from "styles";

export default function App() {
  return (
    <ThemeProvider theme={Dark}>
      <Heading />
      <GlobalStyles />
    </ThemeProvider>
  );
}
