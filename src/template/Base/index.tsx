import { Outlet } from "react-router-dom";

import { Header } from "components";

import { Container, Main } from "./styles";

export default function Baise() {
  return (
    <Main>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Main>
  );
}
