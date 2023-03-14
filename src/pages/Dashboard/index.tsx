import { Logo } from "../../components/Logo";
import { ContainerDashboard, HeaderDashboard } from "./style";
import { useContext, useState } from "react";
import {
  ICreateTech,
  IEditTech,
  LoginContext,
} from "../../Providers/LoginProvider";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loading } from "../../components/Loading";
import { ModalCreateTech } from "./ModalCreateTech";
import { ModalEditTech } from "./ModalEditTech";
import { ModalDeleteTech } from "./ModalDeleteTech";
import { ContentDashboard } from "./ContentDashboard";

export function Dashboard() {
  const [isOpenModalConfirmDeleteTech, setIsOpenModalConfirmDeleteTech] =
    useState(false);

  const { logout, user, isOpenModalCreateTech, isOpenModalEditTech } =
    useContext(LoginContext);

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
            <ContentDashboard />
          </>
        ) : (
          <Loading />
        )}
      </ContainerDashboard>
      {isOpenModalCreateTech && (
        <ModalCreateTech
          errorsCreateTech={errorsCreateTech}
          handleSubmitCreateTech={handleSubmitCreateTech}
          registerCreateTech={registerCreateTech}
        />
      )}
      {isOpenModalEditTech && (
        <ModalEditTech
          errorsEditTech={errorsEditTech}
          handleSubmitEditTech={handleSubmitEditTech}
          isOpenModalConfirmDeleteTech={isOpenModalConfirmDeleteTech}
          registerEditTech={registerEditTech}
          setIsOpenModalConfirmDeleteTech={setIsOpenModalConfirmDeleteTech}
        />
      )}
      {isOpenModalConfirmDeleteTech && (
        <ModalDeleteTech
          isOpenModalConfirmDeleteTech={isOpenModalConfirmDeleteTech}
          setIsOpenModalConfirmDeleteTech={setIsOpenModalConfirmDeleteTech}
        />
      )}
    </>
  ) : (
    <Navigate to={"/login"} replace />
  );
}
