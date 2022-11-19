import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { H2 } from "../../components/H2";
import { Logo } from "../../components/Logo";
import { Span } from "../../components/Span";
import { ISignInData, LoginContext } from "../../Providers/LoginProvider";
import { ContainerLogin, InputStyled } from "./style";
import { ButtonEye } from "../../components/ButtonEye";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivSrcElements } from "../../components/DivSrcElements";

export function Login() {
  const { seePassword, viewPassword, signIn } = useContext(LoginContext);

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Insira um email válido")
        .required("Campo obrigatório"),
      password: yup.string().required("Campo obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInData>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerLogin>
      <Logo />

      <div className="div-form-login">
        <H2 text="Login" />

        <form onSubmit={handleSubmit(signIn)}>
          <DivSrcElements>
            <label htmlFor="email">
              Email{errors.email && <span>{errors.email.message}</span>}
            </label>
            <InputStyled
              type="text"
              id="email"
              placeholder="Digite seu email"
              {...register("email")}
              error={errors.email}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="password">
              Senha {errors.password && <span>{errors.password.message}</span>}
            </label>
            <InputStyled
              type={seePassword ? "text" : "password"}
              id="password"
              placeholder="Digite sua senha"
              error={errors.password}
              {...register("password")}
            />
            <ButtonEye onClick={viewPassword} seePassword={seePassword} />
          </DivSrcElements>

          <ButtonSubmit
            disabled={Object.values(errors).length > 0 ? true : false}
            text="Entrar"
          />
        </form>

        <Span text="Ainda não possui uma conta?" />

        <Link to={"/registration"}>Cadastre-se</Link>
      </div>
    </ContainerLogin>
  );
}
