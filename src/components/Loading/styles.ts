import styled, { css } from "styled-components";

export const Loader = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    font-weight: ${theme.font.weight.bold};
  `}
`;
