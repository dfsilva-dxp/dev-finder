import { Outlet } from "react-router-dom";

import { Header } from "components";

import { Container, Main } from "./styles";

import { IBaseLayoutProps } from "./types";

export default function Base({ onToggleTheme, theme }: IBaseLayoutProps) {
  return (
    <Main>
      <Header onToggleTheme={onToggleTheme} theme={theme} />
      <Container>
        <Outlet />
      </Container>
    </Main>
  );
}
