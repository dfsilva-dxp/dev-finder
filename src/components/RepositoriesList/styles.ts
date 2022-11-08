import styled, { css } from "styled-components";

export const List = styled.div`
  ${({ theme }) => css`
    max-height: 75vh;
    overflow: hidden;

    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        padding: 1rem 2rem;
        font-weight: ${theme.font.weight.medium};
        font-size: ${theme.font.sizes.small};
        line-height: 1.5rem;
        text-align: left;
        border-radius: ${theme.border.radius};
      }

      td {
        background: ${theme.colors.panel};
        padding: 1rem 2rem;
        border: 0;

        &:last-child {
          max-width: 40ch;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    &:hover {
      overflow-y: scroll;
    }
  `}
`;
