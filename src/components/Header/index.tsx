import { SunDim } from "phosphor-react";

import { Button } from "components";

import { Wrapper } from "./styles";

export default function Header() {
  return (
    <Wrapper>
      <h1>devFinder</h1>
      <Button icon={<SunDim size={18} />}>Dark</Button>
    </Wrapper>
  );
}
