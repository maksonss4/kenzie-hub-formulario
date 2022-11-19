import { ContainerLoading } from "./style";

export function Loading() {
  return (
    <ContainerLoading>
      <div className="loading-container"></div>
      <p>Carregando...</p>
    </ContainerLoading>
  );
}
