import { Dispatch, SetStateAction, useContext } from "react";
import { toast } from "react-toastify";
import { H2 } from "../../components/H2";
import { Modal } from "../../components/ModalCreateTech";
import { LoginContext } from "../../Providers/LoginProvider";
import { api } from "../../services";

interface IModalDeleteTechProps {
  setIsOpenModalConfirmDeleteTech: Dispatch<SetStateAction<boolean>>;
  isOpenModalConfirmDeleteTech: boolean;
}

export function ModalDeleteTech({
  isOpenModalConfirmDeleteTech,
  setIsOpenModalConfirmDeleteTech,
}: IModalDeleteTechProps) {
  const {
    nameTechDeleteEdit,
    techDeleteEdit,
    openCloseModalEditTech,
    getData,
  } = useContext(LoginContext);

  function deleteTech() {
    api
      .delete(`/users/techs/${techDeleteEdit.id}`)
      .then(() => {
        toast.success("Tecnologia deletada com sucesso", { autoClose: 3000 });
        setIsOpenModalConfirmDeleteTech(!isOpenModalConfirmDeleteTech);
        openCloseModalEditTech();
        getData();
      })
      .catch((_) => {
        toast.error("Falha ao deletar tecnologia", { autoClose: 3000 });
      });
  }

  return (
    <Modal>
      <div className="div-modal-edit-tech div-modal-delete-tech">
        <div className="title-create-tech">
          <H2 text={nameTechDeleteEdit} />
          <button
            onClick={() =>
              setIsOpenModalConfirmDeleteTech(!isOpenModalConfirmDeleteTech)
            }
          >
            X
          </button>
        </div>

        <div className="div-delet-tech">
          <H2 text="Deseja excluir a tecnologia?" />

          <div className="div-buttons-edit">
            <button
              type="button"
              onClick={() =>
                setIsOpenModalConfirmDeleteTech(!isOpenModalConfirmDeleteTech)
              }
              className="button-excluir-tech"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="confirm-delete-tech"
              onClick={() => deleteTech()}
            >
              Sim
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
