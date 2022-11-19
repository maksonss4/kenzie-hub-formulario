import styled, { css } from "styled-components";

interface IButtonIcon {
  seePassword: boolean;
}

export const ButtonIcon = styled.button<IButtonIcon>`
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
