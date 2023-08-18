import "./Header.module.scss"
import Logo from "../../assets/Logo.png"

export const Header  = ({children}) => {
    return(
        <header>
            <div className="container">
                <img src={Logo} alt="KenzieHub Logo" />
                {children}
            </div>
        </header>
    )
}