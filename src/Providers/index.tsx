import { ReactNode } from "react";
import { LoginProvider } from "./LoginProvider";

export interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return <LoginProvider>{children}</LoginProvider>;
}
