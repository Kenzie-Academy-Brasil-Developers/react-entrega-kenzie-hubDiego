import { Input } from "../../components/input"
import { PasswordImput } from "../InputPassword"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { loginFormSchema } from "./loginFormSchema"
import style from "../../pages/LoginPage/loginPage.module.scss"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const LoginForm = ({setLogin}) => {
    const navigate = useNavigate()
    const registerPage = () => {
        navigate("/register")
    }

    const {register, handleSubmit, formState:{ errors } } = useForm({
        resolver:zodResolver(loginFormSchema)
    })

    const userLogin = async (formData) =>{
        try {
            const {data} = await api.post("/sessions", formData ) 
            setLogin(data.user)
            toast.success("Dados aceitos com sucesso!")
            localStorage.setItem("@USER", data.token)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
            if(error.response?.data.message === "Incorrect email / password combination"){
                toast.error("Email ou senha incorretos")
            }
        }
    }


    const submit = (formData) =>{
        userLogin(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div className={style.title}>
                <h1 className="title">Login</h1>
            </div>
            <Input label="Email" placeholder="Digite aqui seu email" required type="email" id="email"{...register("email")} error={errors.email}/>
            <PasswordImput label="Senha" placeholder="Digite aqui sua senha" required id="password" {...register("password")} error={errors.password}/>
            <button className="button--register submit">Entrar</button>
            <div className={style.registerPage}>
                <p className="headLine">Ainda não possui uma conta?</p>
                <button className="button--register" onClick={registerPage}>Cadastre-se</button>
            </div>
        </form>
    )
}