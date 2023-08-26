import { useContext } from "react";
import { TechCard } from "./TechCard";
import { MdAdd } from "react-icons/md";
import { ModalAdd } from "../Modals/CreateTechModal";
import style from "./techList.module.scss";
import { UserRoutinesContext } from "../../context/UserRoutinesContext";
import { TechContext } from "../../context/TechContext";

export const TechList = () => {
  const { user, techList } = useContext(UserRoutinesContext);
  const { isOpen, setIsOpen } = useContext(TechContext);

  return (
    <section className="container">
      <div className={style.div}>
        <h2 className="title">Tecnologias</h2>
        <button
          className="button"
          title="Add note"
          aria-label="Add"
          onClick={() => setIsOpen(true)}
        >
          <MdAdd />
        </button>
        {isOpen ? <ModalAdd /> : null}
      </div>
      {user.techs ? (
        <ul>
          {techList.length > 0 ? (
            <>
              {techList.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
              ))}
            </>
          ): <h1 className="title">Você ainda não adicinou nenhuma nota!!</h1> }
        </ul>
      ) : (
        <h1 className="title">Você ainda não adicinou nenhuma nota!!</h1>
      )}
    </section>
  );
};
