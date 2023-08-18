import { Input } from "../../components/input"
import { PasswordImput } from "../InputPassword"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"
import { loginFormSchema } from "./loginFormSchema"
import { useContext } from "react"
import { UserRoutinesContext } from "../../context/UserRoutinesContext"
import style from "../../pages/LoginPage/loginPage.module.scss"
import "react-toastify/dist/ReactToastify.css"

export const LoginForm = () => {
    const { userLogin } = useContext(UserRoutinesContext)

    const {register, handleSubmit, formState:{ errors } } = useForm({
        resolver:zodResolver(loginFormSchema)
    })

    const submit = (formData) =>{
        userLogin(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div className={style.title}>
                <h1 className="title">Login</h1>
            </div>
            <Input label="Email" placeholder="Digite aqui seu email" type="email" id="email"{...register("email")} error={errors.email}/>
            <PasswordImput label="Senha" placeholder="Digite aqui sua senha" id="password" {...register("password")} error={errors.password}/>
            <button className="button--register submit">Entrar</button>
            <div className={style.registerPage}>
                <p className="headLine">Ainda não possui uma conta?</p>
                <Link to="/register" className="button--register">
                    Cadastre-se
                </Link>
            </div>
        </form>
    )
}