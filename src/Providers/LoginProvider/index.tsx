import { createContext, useState, useEffect } from "react";
import { IProvidersProps } from "..";

export const LoginContext = createContext({} as ILoginContext);

interface ILoginContext {
  viewPassword: () => void;
  seePassword: boolean;
}

export function LoginProvider({ children }: IProvidersProps) {
  const [seePassword, setSeePassword] = useState(false);

  function viewPassword() {
    setSeePassword(!seePassword);
  }

  return (
    <LoginContext.Provider value={{ seePassword, viewPassword }}>
      {children}
    </LoginContext.Provider>
  );
}
