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
          :hover {
            border-color: var(--white);
            background-color: var(--pink-2);
          }
        `}

  border-radius: 0.201rem;
  border: 1px solid transparent;
  color: var(--gray-5);
  font-size: 0.802rem;
  padding: 0.4rem 0;
`;
