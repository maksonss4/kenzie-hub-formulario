import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonEye } from "../../components/ButtonEye";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { DivSrcElements } from "../../components/DivSrcElements";
import { H2 } from "../../components/H2";
import { Logo } from "../../components/Logo";
import { Span } from "../../components/Span";
import { RegistrationContext } from "../../Providers/RegistrationProvider";
import { ContainerRegistration, InputStyled } from "./style";

export function Registration() {
  const {
    seeConfirmPasswordRegistration,
    seePasswordRegistration,
    viewConfirmPasswordRegistration,
    viewPasswordRegistration,
  } = useContext(RegistrationContext);

  return (
    <ContainerRegistration>
      <Logo />
      <div className="div-form-registration">
        <H2 text="Crie sua conta" />
        <Span text="Rápido e grátis, vamos nessa" />
        <form>
          <DivSrcElements>
            <label htmlFor="name">Nome</label>
            <InputStyled
              type="text"
              placeholder="Digite aqui seu nome"
              id="name"
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="email">Email</label>
            <InputStyled
              type="text"
              placeholder="Digite aqui seu email"
              id="email"
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="password">Senha</label>
            <InputStyled
              type={seePasswordRegistration ? "text" : "password"}
              placeholder="Digite aqui sua senha"
              id="password"
            />
            <ButtonEye
              onClick={viewPasswordRegistration}
              seePassword={seePasswordRegistration}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="confirm_password">Confirmar senha</label>
            <InputStyled
              type={seeConfirmPasswordRegistration ? "text" : "password"}
              placeholder="Confirme a senha"
              id="confirm_password"
            />
            <ButtonEye
              onClick={viewConfirmPasswordRegistration}
              seePassword={seeConfirmPasswordRegistration}
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="bio">Bio</label>
            <InputStyled type="text" placeholder="Fale sobre você" id="bio" />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="contact">Contato</label>
            <InputStyled
              type="text"
              placeholder="Opção de contato"
              id="contact"
            />
          </DivSrcElements>

          <DivSrcElements>
            <label htmlFor="course_module">Selecionar módulo</label>
            <select placeholder="Selecione o módulo" id="course_module">
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

          <ButtonSubmit text="Cadastrar" disabled={true} />
        </form>
        <Span text="Já é cadastrado? faça o login" />
        <Link to={"/login"}>Página de login</Link>
      </div>
    </ContainerRegistration>
  );
}
