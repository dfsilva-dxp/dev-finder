import styled, { css } from "styled-components";

export const Content = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.panel};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium};

    display: flex;
    align-items: flex-start;
    gap: ${theme.spacings.small};
  `}
`;

export const UserInfo = styled.header`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Username = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    a,
    p {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.xsmall};
    }

    a {
      display: block;
      margin-top: ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};
    }

    p {
      color: ${theme.colors.light};
    }
  `}
`;

export const Bio = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.light};
  `}
`;

export const Counters = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const CountDisplay = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
    color: ${theme.colors.text};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};

    strong {
      font-size: ${theme.font.sizes.xsmall};
    }

    span {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xxsmall};

      font-size: ${theme.font.sizes.xsmall};

      span {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacings.xsmall};
      }
    }
  `}
`;
