import styled from "styled-components";

export const ContainerRegistration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.938rem;

  .div-form-registration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 1rem;
    background-color: var(--gray-2);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 0.201rem;
    width: 100%;
    max-width: 22rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    select {
      border-radius: 0.201rem;
      padding: 0.4rem 0.5rem;
      background-color: var(--gray-3);
      color: var(--gray-5);
      border: 0.063rem solid transparent;

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
    }
  }

  a {
    font-weight: 500;
    font-size: 0.802rem;
    color: var(--gray-5);
    background-color: var(--gray-4);
    width: 100%;
    text-align: center;
    border-radius: 0.201rem;
    padding: 0.4rem 0;
  }
`;

export const InputStyled = styled.input`
  border-radius: 0.201rem;
  padding: 0.4rem 0.5rem;
  background-color: var(--gray-3);
  color: var(--gray-5);
  border: 0.063rem solid transparent;

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
