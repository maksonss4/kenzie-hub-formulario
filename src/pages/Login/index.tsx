import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { H2 } from "../../components/H2";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Span } from "../../components/Span";
import { LoginContext } from "../../Providers/LoginProvider";
import { ContainerLogin } from "./style";

export function Login() {
  const { seePassword } = useContext(LoginContext);

  return (
    <ContainerLogin>
      <Logo />
      <div className="div-form-login">
        <H2 text="Login" />
        <form>
          <Input
            id="email"
            label="Email"
            labelFor="email"
            placeholder="Email"
            type="text"
          />
          <Input
            id="password"
            label="Senha"
            labelFor="password"
            placeholder="Digite sua senha"
            type={seePassword ? "text" : "password"}
          />
          <ButtonSubmit disabled={false} text="Entrar" />
        </form>
        <Span text="Ainda não possui uma conta?" />
        <Link to={"/registration"}>Cadastre-se</Link>
      </div>
    </ContainerLogin>
  );
}
