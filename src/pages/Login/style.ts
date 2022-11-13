import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.938rem;

  .div-form-login {
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
