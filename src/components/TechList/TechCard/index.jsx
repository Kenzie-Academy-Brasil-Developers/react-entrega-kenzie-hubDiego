import { useContext } from "react";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import { TechContext } from "../../../context/TechContext";
import style from "./techCard.module.scss";

export const TechCard = ({ tech }) => {
  const { setEditingTech, techDelete } = useContext(TechContext);
  return (
    <li className={style.card}>
      <p className="paragraph">{tech.title}</p>
      <div className={style.containerIcons}>
        <p className="headLine">{tech.status}</p>
        <div>
          <button
            className={style.icons}
            title="Edit"
            aria-label="Edit"
            onClick={() => setEditingTech(tech)}
          >
            <BiEditAlt />
          </button>
          <button
            title="Delete"
            aria-label="Delete"
            className={style.icons}
            onClick={() => techDelete(tech.id)}
          >
            <BiTrash />
          </button>
        </div>
      </div>
    </li>
  );
};
