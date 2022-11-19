import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  ${({ disabled }) =>
    disabled
      ? css`
          background-color: var(--disabled);
          cursor: not-allowed;
        `
      : css`
          background-color: var(--pink-1);
        `}

  border-radius: 0.201rem;
  color: var(--gray-5);
  font-size: 0.802rem;
  padding: 0.4rem 0;
`;
