import { H2 } from "../../components/H2";
import { Logo } from "../../components/Logo";
import { Span } from "../../components/Span";
import {
  ContainerDashboard,
  HeaderDashboard,
  InputStyled,
  LiTech,
  SectionTechs,
  SectionUser,
  UlTechs,
} from "./style";
import { MdAdd } from "react-icons/md";
import { useContext, useState } from "react";
import {
  ICreateTech,
  IEditTech,
  LoginContext,
} from "../../Providers/LoginProvider";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/ModalCreateTech";
import { DivSrcElements } from "../../components/DivSrcElements";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services";
import { Loading } from "../../components/Loading";

export function Dashboard() {
  const [isOpenModalConfirmDeleteTech, setIsOpenModalConfirmDeleteTech] =
    useState(false);
  const {
    logout,
    user,
    createTech,
    techs,
    isOpenModalCreateTech,
    openCloseModalCreateTech,
    isOpenModalEditTech,
    openCloseModalEditTech,
    editTech,
    setTechDeleteEdit,
    nameTechDeleteEdit,
    setNameTechDeleteEdit,
    techDeleteEdit,
    getData,
  } = useContext(LoginContext);
  const token = localStorage.getItem("@KenzieHubToken");

  const schemaCreateTech = yup
    .object({
      title: yup.string().required("Campo obrigatório"),
      status: yup.string().required("Campo obrigatório"),
    })
    .required();

  const schemaEditTech = yup
    .object({
      status: yup.string().required("Campo obrigatório"),
    })
    .required();

  const {
    register: registerCreateTech,
    handleSubmit: handleSubmitCreateTech,
    formState: { errors: errorsCreateTech },
  } = useForm<ICreateTech>({
    resolver: yupResolver(schemaCreateTech),
  });

  const {
    register: registerEditTech,
    handleSubmit: handleSubmitEditTech,
    formState: { errors: errorsEditTech },
  } = useForm<IEditTech>({
    resolver: yupResolver(schemaEditTech),
  });

  function deleteTech() {
    api
      .delete(`/users/techs/${techDeleteEdit.id}`)
      .then(() => {
        toast.success("Tecnologia deletada com sucesso", { autoClose: 3000 });
        setIsOpenModalConfirmDeleteTech(!isOpenModalConfirmDeleteTech);
        openCloseModalEditTech();
        getData();
      })
      .catch((err) => {
        toast.error("Falha ao deletar tecnologia", { autoClose: 3000 });
      });
  }

  return token ? (
    <>
      <ContainerDashboard>
        {Object.keys(user).length > 0 ? (
          <>
            <HeaderDashboard>
              <div className="box-header">
                <Logo />
                <button onClick={logout}>Sair</button>
              </div>
            </HeaderDashboard>
            <main>
              <SectionUser>
                <div className="div-box-title-user">
                  <H2 text={`Olá, ${user.name}`} />
                  <Span text={`${user.course_module}`} />
                </div>
              </SectionUser>
              <SectionTechs>
                <div className="div-techs-title">
                  <H2 text="Tecnologias" />
                  <button
                    type="button"
                    onClick={() => openCloseModalCreateTech()}
                  >
                    <MdAdd />
                  </button>
                </div>
                {techs.length > 0 ? (
                  <UlTechs>
                    {techs.map((tech) => {
                      return (
                        <LiTech
                          key={tech.id}
                          onClick={() => {
                            setTechDeleteEdit(tech);
                            openCloseModalEditTech();
                            setNameTechDeleteEdit(tech.title);
                          }}
                        >
                          <H2 text={tech.title} />
                          <Span text={tech.status} />
                        </LiTech>
                      );
                    })}
                  </UlTechs>
                ) : (
                  <p>Voce não tem techs cadastradas</p>
                )}
              </SectionTechs>
            </main>
          </>
        ) : (
          <Loading />
        )}
      </ContainerDashboard>
      {isOpenModalCreateTech && (
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
                disabled={
                  Object.values(errorsCreateTech).length > 0 ? true : false
                }
              />
            </form>
          </div>
        </Modal>
      )}
      {isOpenModalEditTech && (
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
                  disabled={
                    Object.values(errorsEditTech).length > 0 ? true : false
                  }
                />
                <button
                  type="button"
                  onClick={() =>
                    setIsOpenModalConfirmDeleteTech(
                      !isOpenModalConfirmDeleteTech
                    )
                  }
                  className="button-excluir-tech"
                >
                  Excluir
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {isOpenModalConfirmDeleteTech && (
        <Modal>
          <div className="div-modal-edit-tech div-modal-delete-tech">
            <div className="title-create-tech">
              <H2 text={nameTechDeleteEdit} />
              <button
                onClick={() =>
                  setIsOpenModalConfirmDeleteTech(!isOpenModalConfirmDeleteTech)
                }
              >
                X
              </button>
            </div>

            <div className="div-delet-tech">
              <H2 text="Deseja excluir a tecnologia?" />

              <div className="div-buttons-edit">
                <button
                  type="button"
                  onClick={() =>
                    setIsOpenModalConfirmDeleteTech(
                      !isOpenModalConfirmDeleteTech
                    )
                  }
                  className="button-excluir-tech"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="confirm-delete-tech"
                  onClick={() => deleteTech()}
                >
                  Sim
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  ) : (
    <Navigate to={"/login"} replace />
  );
}
