import { ReactNode } from "react";
import { DivSrcElementsStyled } from "./style";

interface IDivSrcElements {
  children: ReactNode;
}

export function DivSrcElements({ children }: IDivSrcElements) {
  return <DivSrcElementsStyled>{children}</DivSrcElementsStyled>;
}
