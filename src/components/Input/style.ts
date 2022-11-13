import styled from "styled-components";
import { FaRegEye } from "react-icons/fa";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
`;

export const LabelStyled = styled.label`
  margin-bottom: 0.313rem;
  font-weight: 400;
  font-size: 0.611rem;
  color: var(--gray-5);
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
