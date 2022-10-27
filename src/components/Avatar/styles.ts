import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.light};

    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    padding: 4px;

    img {
      width: 100%;
      border-radius: 50%;
    }
  `}
`;
