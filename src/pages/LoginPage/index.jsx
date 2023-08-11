import Logo from "../../assets/Logo.png"
import { LoginForm } from "../../components/loginForm"
import style from "./loginPage.module.scss"

export const LoginPage = ({setLogin}) =>{
    return(
        <>
            <header className={style.header}>
                <div className="container sm">
                    <img src={Logo} alt="KenzieHub Logo" />
                </div>
            </header>
            <main>
                <div className="container sm">
                    <LoginForm setLogin={setLogin}/>
                </div>
            </main>
        </>
    )
}