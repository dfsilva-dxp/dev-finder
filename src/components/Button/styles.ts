import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: 0;
    border-radius: ${theme.border.radius};
    box-shadow: none;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.text};
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};

    &:hover,
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: ${theme.border.outlineOffiset};
    }
  `}
`;
