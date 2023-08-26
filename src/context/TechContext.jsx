import { useContext, useState } from "react";
import { createContext } from "react";
import { UserRoutinesContext } from "./UserRoutinesContext";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setTechList, techList } = useContext(UserRoutinesContext);
  const [editingTech, setEditingTech] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("@TOKEN");

  const addTechnology = async (formData) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnlogia adicionada com sucesso!", {
        autoClose: 1000,
      });
      setIsOpen(false);
      setTechList([...techList, data]);
    } catch (error) {
      toast.error("Tecnlogia já cadastrada!!",{
        autoClose: 1000,
      });
      console.log(error);
    }
  };

  const techUpdate = async (formData) => {
    try {
      const { data } = await api.put(
        `/users/techs/${editingTech.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techList.map((techs) => {
        if (techs.id === editingTech.id) {
          return data;
        } else {
          return techs;
        }
      });
      toast.success("Nivel da tecnlogia atualizada com sucesso!",{
        autoClose: 1000,
      });
      setTechList(newTechList);
      setEditingTech(null);
    } catch (error) {
      console.log(error);
    }
  };

  const techDelete = async (deletingId) => {
    try {
      await api.delete(`/users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnlogia deletada com sucesso!",{
        autoClose: 1000,
      });
      const newTechList = techList.filter((techs) => techs.id != deletingId);
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!",{
        autoClose: 1000,
      });
    }
  };

  return (
    <TechContext.Provider
      value={{
        addTechnology,
        setEditingTech,
        editingTech,
        techUpdate,
        techDelete,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
