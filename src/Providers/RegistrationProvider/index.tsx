import { createContext, useState } from "react";
import { IProvidersProps } from "..";

export const RegistrationContext = createContext({} as IRegistrationContext);

interface IRegistrationContext {
  viewPasswordRegistration: () => void;
  viewConfirmPasswordRegistration: () => void;
  seeConfirmPasswordRegistration: boolean;
  seePasswordRegistration: boolean;
}

export function RegistrationProvider({ children }: IProvidersProps) {
  const [seePasswordRegistration, setSeePasswordRegistration] = useState(false);
  const [seeConfirmPasswordRegistration, setSeeConfirmPasswordRegistration] =
    useState(false);

  function viewPasswordRegistration() {
    setSeePasswordRegistration(!seePasswordRegistration);
  }

  function viewConfirmPasswordRegistration() {
    setSeeConfirmPasswordRegistration(!seeConfirmPasswordRegistration);
  }

  return (
    <RegistrationContext.Provider
      value={{
        seePasswordRegistration,
        seeConfirmPasswordRegistration,
        viewConfirmPasswordRegistration,
        viewPasswordRegistration,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
