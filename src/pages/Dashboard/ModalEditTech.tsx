import { Dispatch, SetStateAction, useContext } from "react";
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { DivSrcElements } from "../../components/DivSrcElements";
import { H2 } from "../../components/H2";
import { Modal } from "../../components/ModalCreateTech";
import { IEditTech, LoginContext } from "../../Providers/LoginProvider";
import { InputStyled } from "./style";

interface IModalEditTechProps {
  handleSubmitEditTech: UseFormHandleSubmit<IEditTech>;
  errorsEditTech: Partial<
    FieldErrorsImpl<{
      status: string;
    }>
  >;
  registerEditTech: UseFormRegister<IEditTech>;
  isOpenModalConfirmDeleteTech: boolean;
  setIsOpenModalConfirmDeleteTech: Dispatch<SetStateAction<boolean>>;
}

export function ModalEditTech({
  handleSubmitEditTech,
  errorsEditTech,
  registerEditTech,
  isOpenModalConfirmDeleteTech,
  setIsOpenModalConfirmDeleteTech,
}: IModalEditTechProps) {
  const { openCloseModalEditTech, editTech, nameTechDeleteEdit } =
    useContext(LoginContext);

  return (
    <Modal>
      <div className="div-modal-create-tech">
        <div className="title-create-tech">
          <H2 text="Altere o status da tecnologia" />
          <button onClick={() => openCloseModalEditTech()}>X</button>
        </div>
        <form
          onSubmit={handleSubmitEditTech(editTech)}
          className="form-crate-tech"
        >
          <DivSrcElements>
            <label htmlFor="title">Nome</label>

            <InputStyled
              error={undefined}
              placeholder="Novo nome"
              value={nameTechDeleteEdit}
              disabled
              id="title"
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="status">
              Selecionar status
              {errorsEditTech.status && (
                <span>{errorsEditTech.status.message}</span>
              )}
            </label>
            <select id="status" {...registerEditTech("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </DivSrcElements>

          <div className="div-buttons-edit">
            <ButtonSubmit
              text="Salvar alteração"
              disabled={Object.values(errorsEditTech).length > 0 ? true : false}
            />
            <button
              type="button"
              onClick={() =>
                setIsOpenModalConfirmDeleteTech(!isOpenModalConfirmDeleteTech)
              }
              className="button-excluir-tech"
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
