import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProvidersProps } from "..";
import { api } from "../../services";

export const RegistrationContext = createContext({} as IRegistrationContext);

interface IRegistrationContext {
  viewPasswordRegistration: () => void;
  viewConfirmPasswordRegistration: () => void;
  seeConfirmPasswordRegistration: boolean;
  seePasswordRegistration: boolean;
  createUser: (data: IDataRegistration) => void;
}

export interface IDataRegistration {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IResponseRegistration {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

export function RegistrationProvider({ children }: IProvidersProps) {
  const [seePasswordRegistration, setSeePasswordRegistration] = useState(false);
  const [seeConfirmPasswordRegistration, setSeeConfirmPasswordRegistration] =
    useState(false);
  const navigate = useNavigate();

  function viewPasswordRegistration() {
    setSeePasswordRegistration(!seePasswordRegistration);
  }

  function viewConfirmPasswordRegistration() {
    setSeeConfirmPasswordRegistration(!seeConfirmPasswordRegistration);
  }

  function createUser(data: IDataRegistration) {
    api
      .post<IResponseRegistration>("/users", data)
      .then(() => {
        toast.success("Usuário criado com sucesso", { autoClose: 3000 });
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.data.message === "Email already exists") {
          toast.error("Email anteriormente cadastrado, faça o login", {
            autoClose: 3000,
          });
        } else {
          toast.error(err.response.data.message, { autoClose: 3000 });
        }
      });
  }

  return (
    <RegistrationContext.Provider
      value={{
        seePasswordRegistration,
        seeConfirmPasswordRegistration,
        viewConfirmPasswordRegistration,
        viewPasswordRegistration,
        createUser,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
