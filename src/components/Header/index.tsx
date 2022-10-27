import { MoonStars, SunDim } from "phosphor-react";

import { Button } from "components";

import { Wrapper } from "./styles";
import { IHeaderProps } from "./types";

export default function Header({ onToggleTheme, theme }: IHeaderProps) {
  return (
    <Wrapper>
      <h1>devFinder</h1>
      <Button
        icon={theme === "dark" ? <SunDim size={18} /> : <MoonStars size={18} />}
        onClick={onToggleTheme}
      >
        {theme === "dark" ? "Dark" : "Light"}
      </Button>
    </Wrapper>
  );
}
