import { SunDim } from "phosphor-react";

import { Button } from "components";

import { Wrapper } from "./styles";
import { IHeaderProps } from "./types";

export default function Header({ onToggleTheme }: IHeaderProps) {
  return (
    <Wrapper>
      <h1>devFinder</h1>
      <Button icon={<SunDim size={18} />} onClick={onToggleTheme}>
        Dark
      </Button>
    </Wrapper>
  );
}
