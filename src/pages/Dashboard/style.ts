import { FieldError } from "react-hook-form";
import styled, { css } from "styled-components";

export const ContainerDashboard = styled.div``;

export const HeaderDashboard = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0.938rem;
  border-bottom: 1px solid var(--gray-2);

  h1 {
    font-size: 1.5rem;
  }

  button {
    background-color: var(--gray-2);
    color: var(--gray-5);
    border-radius: 0.201rem;
    padding: 0.3rem 0.5rem;
    border: 1px solid transparent;

    :hover {
      border-color: var(--white);
      transition: 0.5s;
    }
  }

  .box-header {
    width: 100%;
    max-width: 760px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SectionUser = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 0.938rem;
  border-bottom: 1px solid var(--gray-2);

  .div-box-title-user {
    max-width: 760px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 380px) {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const SectionTechs = styled.section`
  padding: 1.5rem 0.938rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .div-techs-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    width: 100%;
    max-width: 760px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.201rem;
      border: 1px solid transparent;
      background-color: var(--gray-2);
      color: var(--gray-5);
      padding: 0.2rem;

      :hover {
        border-color: var(--green);
        transition: 0.5s;
      }
    }
  }
`;

export const UlTechs = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-2);
  border-radius: 0.201rem;
  padding: 0.6rem 0.4rem;
  gap: 0.6rem;
  width: 100%;
  max-width: 760px;
`;

export const LiTech = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  border-radius: 0.201rem;
  background-color: var(--gray-1);
  border: 1px solid transparent;

  :hover {
    transition: 0.5s;
    border-color: var(--white);
    cursor: pointer;
  }

  @media (min-width: 210px) {
    flex-direction: row;
  }
`;

interface IInputStyled {
  error: FieldError | undefined;
}

export const InputStyled = styled.input<IInputStyled>`
  ${({ error }) =>
    error
      ? css`
          border: 0.063rem solid var(--red);
        `
      : css`
          border: 0.063rem solid transparent;
        `}
  border-radius: 0.201rem;
  padding: 0.4rem 0.5rem;
  background-color: var(--gray-3);
  color: var(--gray-5);

  ::placeholder {
    color: var(--gray-4);
    font-weight: 400;
    font-size: 0.9rem;
  }

  :focus {
    outline: none;
    border: 0.063rem solid var(--gray-5);

    ::placeholder {
      color: var(--gray-5);
      font-size: 0.9rem;
    }
  }
`;

export const DivNoTechs = styled.div`
  text-align: center;

  p {
    color: var(--gray-4);
  }
`;
