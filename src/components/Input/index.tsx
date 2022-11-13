import { ViewPassword } from "../ViewPassword";
import { ContainerDiv, InputStyled, LabelStyled } from "./style";

interface IInput {
  labelFor: string;
  label: string;
  placeholder: string;
  id: string;
  type: string;
}

export function Input({ labelFor, label, placeholder, id, type }: IInput) {
  return (
    <ContainerDiv>
      <LabelStyled htmlFor={labelFor}>{label}</LabelStyled>
      <InputStyled placeholder={placeholder} id={id} type={type} />
      {id === "password" && <ViewPassword />}
    </ContainerDiv>
  );
}
