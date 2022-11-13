import { ButtonViewPassword } from "./style";
import { FaRegEye } from "react-icons/fa";
import { useContext } from "react";
import { LoginContext } from "../../Providers/LoginProvider";

export function ViewPassword() {
  const { seePassword, viewPassword } = useContext(LoginContext);

  return (
    <ButtonViewPassword
      onClick={viewPassword}
      seePassword={seePassword}
      type="button"
    >
      <FaRegEye size={15} />
    </ButtonViewPassword>
  );
}
