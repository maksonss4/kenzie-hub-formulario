import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  padding: 0.938rem;

  .div-modal-container {
    width: 100%;
    max-width: 400px;
  }

  .div-delet-tech {
    background-color: var(--gray-2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }

  .div-modal-delete-tech {
    max-width: 250px;
    margin: 0 auto;
  }
  .div-buttons-edit {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;

    button {
      border-radius: 0.201rem;
      width: 100%;
    }

    .button-excluir-tech {
      background-color: var(--gray-4);
      color: var(--gray-5);
    }

    .confirm-delete-tech {
      background-color: var(--pink-1);
      color: var(--gray-5);
    }
  }

  .title-create-tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
    background-color: var(--gray-3);
    border-radius: 0.201rem 0.201rem 0 0;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.201rem;
      padding: 0.1rem 0.3rem;
      font-weight: bold;
    }
  }

  .form-crate-tech {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--gray-2);
    padding: 1rem 0.5rem;
    border-radius: 0 0 0.201rem 0.201rem;

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
`;
