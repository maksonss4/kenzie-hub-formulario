import { SpanStyled } from "./style";

interface ISpan {
  text: string;
}

export function Span({ text }: ISpan) {
  return <SpanStyled>{text}</SpanStyled>;
}
