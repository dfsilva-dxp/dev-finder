import { MoonStars, SunDim } from "phosphor-react";

import { Button } from "components";

import { Container, Wrapper } from "./styles";

import { IHeaderProps } from "./types";

export default function Header({ onToggleTheme, theme }: IHeaderProps) {
  return (
    <Wrapper>
      <Container>
        <h1>devFinder</h1>
        <Button
          icon={
            theme === "dark" ? <SunDim size={18} /> : <MoonStars size={18} />
          }
          onClick={onToggleTheme}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </Button>
      </Container>
    </Wrapper>
  );
}
