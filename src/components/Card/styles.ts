import styled, { css } from "styled-components";

export const Content = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.panel};
    border-radius: 0.625rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;
  `}
`;

export const Cover = styled.header`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.cover};
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    margin-top: -1.25rem;
    border: 0;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.light};
    line-height: 0;
    align-self: flex-start;

    &:hover,
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: ${theme.border.outlineOffiset};
    }
  `}
`;

export const UserInfo = styled.header`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 0.625rem;
    color: ${theme.colors.light};

    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.medium};
    }

    a,
    small {
      font-weight: ${theme.font.weight.bold};
      width: fit-content;
    }

    a {
      margin-top: ${theme.spacings.xxsmall};
      margin-bottom: ${theme.spacings.xxsmall};
      border-radius: ${theme.border.radius};

      &:hover,
      &:focus {
        outline: 2px solid ${theme.colors.primary};
        outline-offset: ${theme.border.outlineOffiset};
      }
    }
  `}
`;

export const Counters = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small};
    padding: 0 ${theme.spacings.xsmall};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const CountDisplay = styled.span`
  &,
  & a {
    ${({ theme }) => css`
      width: 7rem;
      color: ${theme.colors.light};
      padding: 0 ${theme.spacings.xxsmall};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & + & {
        border-left: 1px solid ${theme.colors.light};
      }

      svg {
        margin-bottom: ${theme.spacings.xxsmall};
      }
      span {
        font-size: ${theme.font.sizes.xsmall};
        font-weight: ${theme.font.weight.bold};
      }
    `}
  }
`;

export const Body = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const Bio = styled.div`
  ${({ theme }) => css`
    h4 {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.grayDark};
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      margin-top: 0.625rem;
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 0.625rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

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

      span svg {
        color: ${theme.colors.primary};
      }
    }
  `}
`;
