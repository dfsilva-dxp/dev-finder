import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;
