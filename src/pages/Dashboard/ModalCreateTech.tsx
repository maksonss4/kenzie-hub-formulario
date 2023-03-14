import { useContext } from "react";
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { DivSrcElements } from "../../components/DivSrcElements";
import { H2 } from "../../components/H2";
import { Modal } from "../../components/ModalCreateTech";
import { ICreateTech, LoginContext } from "../../Providers/LoginProvider";
import { InputStyled } from "./style";

interface IModalCreateTechProps {
  handleSubmitCreateTech: UseFormHandleSubmit<ICreateTech>;
  registerCreateTech: UseFormRegister<ICreateTech>;
  errorsCreateTech: Partial<
    FieldErrorsImpl<{
      title: string;
      status: string;
    }>
  >;
}

export function ModalCreateTech({
  handleSubmitCreateTech,
  registerCreateTech,
  errorsCreateTech,
}: IModalCreateTechProps) {
  const { createTech, openCloseModalCreateTech } = useContext(LoginContext);

  return (
    <Modal>
      <div className="div-modal-create-tech">
        <div className="title-create-tech">
          <H2 text="Cadastrar tecnologia" />
          <button onClick={() => openCloseModalCreateTech()}>X</button>
        </div>
        <form
          onSubmit={handleSubmitCreateTech(createTech)}
          className="form-crate-tech"
        >
          <DivSrcElements>
            <label htmlFor="title">
              Nome
              {errorsCreateTech.title && (
                <span>{errorsCreateTech.title.message}</span>
              )}
            </label>

            <InputStyled
              error={undefined}
              placeholder="Nova tecnologia"
              id="title"
              {...registerCreateTech("title")}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="status">
              Selecionar status
              {errorsCreateTech.status && (
                <span>{errorsCreateTech.status.message}</span>
              )}
            </label>
            <select id="status" {...registerCreateTech("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </DivSrcElements>
          <ButtonSubmit
            text="Cadastrar tecnologia"
            disabled={Object.values(errorsCreateTech).length > 0 ? true : false}
          />
        </form>
      </div>
    </Modal>
  );
}
