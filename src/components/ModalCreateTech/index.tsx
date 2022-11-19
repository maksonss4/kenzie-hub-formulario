import { IProvidersProps } from "../../Providers";
import { ModalContainer } from "./style";

export function Modal({ children }: IProvidersProps) {
  return (
    <ModalContainer>
      <div className="div-modal-container">{children}</div>
    </ModalContainer>
  );
}
