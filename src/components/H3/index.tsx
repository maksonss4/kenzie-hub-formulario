import { H3Styled } from "./style";

interface IH3 {
  text: string;
}

export function H3({ text }: IH3) {
  return <H3Styled>{text}</H3Styled>;
}
