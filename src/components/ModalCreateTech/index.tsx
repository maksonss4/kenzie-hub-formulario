import { IProvidersProps } from "../../Providers";
import { ModalCreateTechContainer } from "./style";

export function ModalCreateTech({ children }: IProvidersProps) {
  return (
    <ModalCreateTechContainer>
      <div className="div-modal-container">{children}</div>
    </ModalCreateTechContainer>
  );
}
