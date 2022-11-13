import styled, { css } from "styled-components";

interface IButtonViewPassword {
  seePassword: boolean;
}

export const ButtonViewPassword = styled.button<IButtonViewPassword>`
  position: absolute;
  right: 0.5rem;
  top: 1.55rem;
  display: flex;
  background-color: transparent;

  ${({ seePassword }) =>
    seePassword
      ? css`
          color: var(--pink-1);
        `
      : css`
          color: var(--gray-5);
        `}
`;
