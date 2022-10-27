import { Outlet } from "react-router-dom";

import { Header } from "components";

import { Container, Main } from "./styles";

export default function Base() {
  return (
    <Main>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Main>
  );
}
