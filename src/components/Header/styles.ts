import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;
