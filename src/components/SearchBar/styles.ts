import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.panel};
    outline-offset: ${theme.border.outlineOffiset};
    border: 2px solid transparent;

    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    &:focus-within {
      outline-offset: ${theme.border.outlineOffiset};
      border: 2px solid ${theme.colors.primary};
    }

    input[type="search"] {
      flex: 1;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      background-color: transparent;
      border: 0;
      outline: none;
    }

    button[type="submit"] {
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      border-radius: ${theme.border.radius};
      border: 0;
      box-shadow: 0;
      outline: 0;
      outline-offset: ${theme.border.outlineOffiset};
      border: 2px solid transparent;
      background-color: ${theme.colors.primary};
      color: #fff;
      font-weight: ${theme.font.weight.bold};

      &:hover {
        filter: brightness(0.9);
      }

      &:focus {
        outline-offset: ${theme.border.outlineOffiset};
        border: 2px solid #fff;
      }
    }

    svg {
      color: ${theme.colors.primary};
    }
  `}
`;
