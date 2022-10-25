import styled, { css } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 71.25rem;
    height: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;
