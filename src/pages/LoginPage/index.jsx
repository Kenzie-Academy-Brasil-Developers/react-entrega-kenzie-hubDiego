import Logo from "../../assets/Logo.png"
import { LoginForm } from "../../components/form/loginForm"
import style from "./loginPage.module.scss"

export const LoginPage = () =>{
    return(
        <>
            <header className={style.header}>
                <div className="container sm">
                    <img src={Logo} alt="KenzieHub Logo" />
                </div>
            </header>
            <main>
                <div className="container sm">
                    <LoginForm/>
                </div>
            </main>
        </>
    )
}