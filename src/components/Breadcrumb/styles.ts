import styled, { css } from "styled-components";

export const BreadcrumbWrapper = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacings.xxsmall};

    a {
      border-radius: ${theme.border.radius};

      &:hover,
      &:focus {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: ${theme.border.outlineOffiset};
      }
    }

    span {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.small};
    }

    span:first-child {
      color: ${theme.colors.primary};
    }

    svg {
      line-height: 0;
    }
  `}
`;

export const Disabled = styled.span`
  cursor: not-allowed;
`;
