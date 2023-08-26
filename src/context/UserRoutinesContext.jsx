import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { api } from "../services/api";

export const UserRoutinesContext = createContext({});

export const UserRoutinesProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [techList, setTechList] = useState({});
  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.log(error);
    }
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      setTechList(data.user.techs);
      localStorage.setItem("@TOKEN", data.token);
      setLoading(true);
      navigate("/dashboard");
      setTimeout(() => {
        toast.success(
          `Seja bem-vindo(a) ${data.user.name}!!Dados aceitos com sucesso! `,
          {
            autoClose: 1000,
          }
        );
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Email ou senha incorretos");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechList(data.techs);
        setUser(data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      getUser();
    }
  }, []);

  const logout = () => {
    if (setUser != null) {
      setUser(null);
      localStorage.removeItem("@TOKEN");
      navigate("/");
    }
  };

  return (
    <UserRoutinesContext.Provider
      value={{
        loading,
        user,
        techList,
        setTechList,
        userRegister,
        logout,
        userLogin,
      }}
    >
      {children}
    </UserRoutinesContext.Provider>
  );
};
