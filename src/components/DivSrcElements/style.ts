import styled from "styled-components";

export const DivSrcElementsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.313rem;
    font-weight: 400;
    font-size: 0.611rem;
    color: var(--gray-5);

    span {
      color: var(--red);
    }
  }
`;
