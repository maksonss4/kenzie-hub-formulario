import { H2Styled } from "./style";

interface IH2 {
  text: string;
}

export function H2({ text }: IH2) {
  return <H2Styled>{text}</H2Styled>;
}
