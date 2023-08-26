import { RegisterForm } from "../../components/form/registerForm"
import style from "./RegisterPage.module.scss"
import {Header} from "../../components/header"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserRoutinesContext } from "../../context/UserRoutinesContext"

export const RegisterPage = () =>{
    const {logout} = useContext( UserRoutinesContext )
    return(
        <>
        <Header>
            <Link to="/" className="button" onClick={logout}>Voltar</Link>
        </Header>
        <main>
            <div className="container sm">
                <div className={style.title_container}>
                    <h1 className="title">Crie sua conta</h1>
                    <p className="headLine">Rapido é grátis, vamos nessa!</p>
                </div>
                <RegisterForm/>
            </div>
        </main>
        </>
    )
}