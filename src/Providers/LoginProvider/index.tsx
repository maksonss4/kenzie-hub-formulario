import { createContext, useEffect, useState } from "react";
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
  logout: () => void;
  createTech: (data: ICreateTech) => void;
  editTech: (data: IEditTech) => void;
  techs: ITech[];
  isOpenModalCreateTech: boolean;
  openCloseModalCreateTech: () => void;
  isOpenModalEditTech: boolean;
  openCloseModalEditTech: () => void;
  setTechDeleteEdit: (data: ITech) => void;
  techDeleteEdit: ITech;
  nameTechDeleteEdit: string;
  setNameTechDeleteEdit: (s: string) => void;
  getData: () => void;
}

interface ITechResponse {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

interface ITech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface ICreateTech {
  title: string;
  status: string;
}

export interface IEditTech {
  status: string;
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
  techs: ITech[];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}

export function LoginProvider({ children }: IProvidersProps) {
  const [techDeleteEdit, setTechDeleteEdit] = useState({} as ITech);
  const [nameTechDeleteEdit, setNameTechDeleteEdit] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [user, setUser] = useState({} as IUser);
  const [techs, setTechs] = useState([] as ITech[]);
  const [isOpenModalCreateTech, setIsOpenModalCreateTech] = useState(false);
  const [isOpenModalEditTech, setIsOpenModalEditTech] = useState(false);
  const navigate = useNavigate();

  function openCloseModalCreateTech() {
    setIsOpenModalCreateTech(!isOpenModalCreateTech);
  }

  function openCloseModalEditTech() {
    setIsOpenModalEditTech(!isOpenModalEditTech);
  }

  function getData() {
    const token = localStorage.getItem("@KenzieHubToken");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api
        .get<IUser>("/profile")
        .then((res) => {
          setUser(res.data);
          setTechs(res.data.techs);
          navigate("/dashboard", { replace: true });
        })
        .catch((err) => {
          navigate("/login", { replace: true });
        });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function signIn(data: ISignInData) {
    api
      .post<IResponseSignIn>("/sessions", data)
      .then((res) => {
        toast.success("Login realizado com sucesso", { autoClose: 3000 });
        const { user: userLogado, token } = res.data;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        localStorage.setItem("@KenzieHubToken", token);
        setUser(userLogado);
        setTechs(userLogado.techs);

        navigate(`/dashboard`, { replace: true });
      })
      .catch((err) =>
        toast.error(err.response.data.message, { autoClose: 3000 })
      );
  }

  function logout() {
    localStorage.removeItem("@KenzieHubToken");
    toast.info("Logout realizado", { autoClose: 3000 });
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1000);
  }

  function createTech(data: ICreateTech) {
    api
      .post<ITechResponse>("/users/techs", data)
      .then(() => {
        toast.success("Tecnologia cadastrada com sucesso", { autoClose: 3000 });
        getData();
        openCloseModalCreateTech();
      })
      .catch(() =>
        toast.error("Tecnologia cadastrada anteriormente", { autoClose: 3000 })
      );
  }

  function editTech(data: IEditTech) {
    data.status === techDeleteEdit.status
      ? toast.info("Altere o status da tech selecionada", { autoClose: 3000 })
      : api
          .put(`/users/techs/${techDeleteEdit.id}`, data)
          .then(() => {
            toast.success("Tecnologia editada com sucesso", {
              autoClose: 3000,
            });
            getData();
            openCloseModalEditTech();
          })
          .catch(() => {
            toast.error("Tecnologia cadastrada anteriormente", {
              autoClose: 3000,
            });
          });
  }

  function viewPassword() {
    setSeePassword(!seePassword);
  }

  return (
    <LoginContext.Provider
      value={{
        createTech,
        techs,
        seePassword,
        viewPassword,
        signIn,
        user,
        logout,
        isOpenModalCreateTech,
        openCloseModalCreateTech,
        isOpenModalEditTech,
        openCloseModalEditTech,
        editTech,
        setTechDeleteEdit,
        techDeleteEdit,
        nameTechDeleteEdit,
        getData,
        setNameTechDeleteEdit,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
