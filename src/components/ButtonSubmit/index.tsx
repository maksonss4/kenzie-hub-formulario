import { ButtonStyled } from "./style";

interface IButtonSubmit {
  text: string;
  disabled: boolean;
}

export function ButtonSubmit({ text, disabled }: IButtonSubmit) {
  return (
    <ButtonStyled type="submit" disabled={disabled}>
      {text}
    </ButtonStyled>
  );
}
