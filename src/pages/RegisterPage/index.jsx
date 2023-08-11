import { RegisterForm } from "../../components/registerForm"
import style from "./RegisterPage.module.scss"
import {Header} from "../../components/header"
import { Button } from "../../components/button"
import Logo from "../../assets/Logo.png"

export const RegisterPage = () =>{
    return(
        <>
        <Header>
        <div className="container sm">
            <img src={Logo} alt="KenzieHub Logo" />
            <Button>Voltar</Button>
        </div>
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