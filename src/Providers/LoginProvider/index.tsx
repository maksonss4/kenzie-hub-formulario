import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProvidersProps } from "..";
import { api } from "../../services";

export const LoginContext = createContext({} as ILoginContext);

interface ILoginContext {
  viewPassword: () => void;
  seePassword: boolean;
  signIn: (data: ISignInData) => void;
  user: IUser;
}

export interface ISignInData {
  email: string;
  password: string;
}

interface IResponseSignIn {
  token: string;
  user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}

export function LoginProvider({ children }: IProvidersProps) {
  const [seePassword, setSeePassword] = useState(false);
  const [user, setUser] = useState({} as IUser);
  const navigate = useNavigate();

  function viewPassword() {
    setSeePassword(!seePassword);
  }

  function signIn(data: ISignInData) {
    api
      .post<IResponseSignIn>("/sessions", data)
      .then((res) => {
        toast.success("Login realizado com sucesso", { autoClose: 3000 });
        const { user: userLogado, token } = res.data;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        localStorage.setItem("@KenzieHubToken", token);
        setUser(userLogado);

        navigate(`/dashboard`, { replace: true });
      })
      .catch((err) =>
        toast.error(err.response.data.message, { autoClose: 3000 })
      );
  }

  return (
    <LoginContext.Provider value={{ seePassword, viewPassword, signIn, user }}>
      {children}
    </LoginContext.Provider>
  );
}
