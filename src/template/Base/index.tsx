import { Outlet } from "react-router-dom";

import { Header } from "components";

import { Container, Main } from "./styles";
import { IBaseLayoutProps } from "./types";

export default function Base({ onToggleTheme }: IBaseLayoutProps) {
  return (
    <Main>
      <Container>
        <Header onToggleTheme={onToggleTheme} />
        <Outlet />
      </Container>
    </Main>
  );
}
