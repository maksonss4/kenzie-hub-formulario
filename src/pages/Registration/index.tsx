import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonEye } from "../../components/ButtonEye";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { DivSrcElements } from "../../components/DivSrcElements";
import { H2 } from "../../components/H2";
import { Logo } from "../../components/Logo";
import { Span } from "../../components/Span";
import {
  IDataRegistration,
  RegistrationContext,
} from "../../Providers/RegistrationProvider";
import { ContainerRegistration, InputStyled } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function Registration() {
  const {
    seeConfirmPasswordRegistration,
    seePasswordRegistration,
    viewConfirmPasswordRegistration,
    viewPasswordRegistration,
    createUser,
  } = useContext(RegistrationContext);

  const schema = yup
    .object({
      name: yup.string().required("Campo obrigatório"),
      email: yup
        .string()
        .email("Insira um email válido")
        .required("Campo obrigatório"),
      password: yup
        .string()
        .required("Campo obrigatório")
        .min(8, "Mínimo 8 caracteres")
        .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial"),
      confirm_password: yup
        .string()
        .required("Confirme a senha")
        .oneOf([yup.ref("password")], "Precisa ser igual a senha"),
      bio: yup
        .string()
        .required("Campo obrigatório")
        .min(8, "Mínimo 8 caracteres"),
      contact: yup
        .string()
        .required("Campo obrigatório")
        .min(5, "Mínimo 5 caracteres"),
      course_module: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegistration>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerRegistration>
      <Logo />
      <div className="div-form-registration">
        <H2 text="Crie sua conta" />
        <Span text="Rápido e grátis, vamos nessa" />
        <form onSubmit={handleSubmit(createUser)}>
          <DivSrcElements>
            <label htmlFor="name">
              Nome{errors.name && <span>{errors.name.message}</span>}
            </label>
            <InputStyled
              type="text"
              placeholder="Digite aqui seu nome"
              id="name"
              {...register("name")}
              error={errors.name}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="email">
              Email{errors.email && <span>{errors.email.message}</span>}
            </label>
            <InputStyled
              type="text"
              placeholder="Digite aqui seu email"
              id="email"
              {...register("email")}
              error={errors.email}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="password">
              Senha{errors.password && <span>{errors.password.message}</span>}
            </label>
            <InputStyled
              type={seePasswordRegistration ? "text" : "password"}
              placeholder="Digite aqui sua senha"
              id="password"
              {...register("password")}
              error={errors.password}
            />
            <ButtonEye
              onClick={viewPasswordRegistration}
              seePassword={seePasswordRegistration}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="confirm_password">
              Confirmar senha
              {errors.confirm_password && (
                <span>{errors.confirm_password.message}</span>
              )}
            </label>
            <InputStyled
              type={seeConfirmPasswordRegistration ? "text" : "password"}
              placeholder="Confirme a senha"
              id="confirm_password"
              {...register("confirm_password")}
              error={errors.confirm_password}
            />
            <ButtonEye
              onClick={viewConfirmPasswordRegistration}
              seePassword={seeConfirmPasswordRegistration}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="bio">
              Bio{errors.bio && <span>{errors.bio.message}</span>}
            </label>
            <InputStyled
              type="text"
              placeholder="Fale sobre você"
              id="bio"
              {...register("bio")}
              error={errors.bio}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="contact">
              Contato{errors.contact && <span>{errors.contact.message}</span>}
            </label>
            <InputStyled
              type="text"
              placeholder="Opção de contato"
              id="contact"
              {...register("contact")}
              error={errors.contact}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="course_module">Selecionar módulo</label>
            <select
              placeholder="Selecione o módulo"
              id="course_module"
              {...register("course_module")}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)">
                m1
              </option>
              <option value="Segundo módulo (Frontend Avançado)">m2</option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                m3
              </option>
              <option value="Quarto módulo (Backend Avançado)">m4</option>
            </select>
          </DivSrcElements>

          <ButtonSubmit
            text="Cadastrar"
            disabled={Object.values(errors).length > 0 ? true : false}
          />
        </form>
        <Span text="Já é cadastrado? faça o login" />
        <Link to={"/login"}>Página de login</Link>
      </div>
    </ContainerRegistration>
  );
}
