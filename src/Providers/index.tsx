import { ReactNode } from "react";
import { LoginProvider } from "./LoginProvider";
import { RegistrationProvider } from "./RegistrationProvider";

export interface IProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return (
    <RegistrationProvider>
      <LoginProvider>{children}</LoginProvider>;
    </RegistrationProvider>
  );
}
