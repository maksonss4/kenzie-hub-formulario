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
import { useContext } from "react";
import { ICreateTech, LoginContext } from "../../Providers/LoginProvider";
import { Navigate } from "react-router-dom";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { DivSrcElements } from "../../components/DivSrcElements";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function Dashboard() {
  const {
    logout,
    user,
    createTech,
    techs,
    isOpenModalCreateTech,
    openCloseModalCreateTech,
  } = useContext(LoginContext);
  const token = localStorage.getItem("@KenzieHubToken");

  const schemaCreateTech = yup
    .object({
      title: yup.string().required("Campo obrigatório"),
      status: yup.string().required("Campo obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTech>({
    resolver: yupResolver(schemaCreateTech),
  });

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
                        <LiTech key={tech.id}>
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
          <H2 text="Loading..." />
        )}
      </ContainerDashboard>
      {isOpenModalCreateTech && (
        <ModalCreateTech>
          <div className="div-modal-create-tech">
            <div className="title-create-tech">
              <H2 text="Cadastrar tecnologia" />
              <button onClick={() => openCloseModalCreateTech()}>X</button>
            </div>
            <form
              onSubmit={handleSubmit(createTech)}
              className="form-crate-tech"
            >
              <DivSrcElements>
                <label htmlFor="title">
                  Nome{errors.title && <span>{errors.title.message}</span>}
                </label>

                <InputStyled
                  error={undefined}
                  placeholder="Novo nome"
                  id="title"
                  {...register("title")}
                />
              </DivSrcElements>

              <DivSrcElements>
                <label htmlFor="status">
                  Selecionar status
                  {errors.status && <span>{errors.status.message}</span>}
                </label>
                <select id="status" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </DivSrcElements>
              <ButtonSubmit
                text="Cadastrar tecnologia"
                disabled={Object.values(errors).length > 0 ? true : false}
              />
            </form>
          </div>
        </ModalCreateTech>
      )}
    </>
  ) : (
    <Navigate to={"/login"} replace />
  );
}
