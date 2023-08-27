import { useForm } from "react-hook-form";
import { Input } from "../../input";
import { Select } from "../../Select";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TechContext } from "../../../context/TechContext";
import style from "./EditTechModal.module.scss";
import { useOutClick } from "../../../hooks/useOutClick";
import { useKeyDown } from "../../../hooks/useKeyDown";

export const EditTechModal = () => {
  const { techUpdate, editingTech, setEditingTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const modalRef = useOutClick(() => {
    setEditingTech(null)
})

const buttonRef = useKeyDown("Escape", () => {
    setEditingTech(null)
})

  const submit = (formData) => {
    techUpdate(formData);
  };

  return (
    <div role="dialog" className={style.modalOverlay}>
      <div ref={modalRef} className={style.modalBox}>
        <div className={style.modalHeader}>
          <p className="paragraph">Tecnologia Detalhes</p>
          <button
            className={style.closeButton}
            ref={buttonRef}
            onClick={() => setEditingTech(null)}
          >
            <AiOutlineClose/>
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            disabled
            label="Nome"
            placeholder="title"
            type="text"
            id="TechName"
            {...register("title")}
          />
          <Select label="Status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button className="button--register disable" type="submit">
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};
