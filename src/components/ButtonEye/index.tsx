import { FaRegEye } from "react-icons/fa";
import { ButtonIcon } from "./style";

interface IButtonEye {
  seePassword: boolean;
  onClick: () => void;
}

export function ButtonEye({ seePassword, onClick }: IButtonEye) {
  return (
    <ButtonIcon type="button" onClick={onClick} seePassword={seePassword}>
      <FaRegEye size={15} />
    </ButtonIcon>
  );
}
