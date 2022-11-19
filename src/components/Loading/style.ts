import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 1rem;

  .loading-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2rem solid var(--gray-3);
    border-top-color: var(--pink-1);
    animation: rodar 1s infinite;
  }

  p {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--gray-5);
  }

  @keyframes rodar {
    to {
      transform: rotate(1turn);
    }
  }
`;
