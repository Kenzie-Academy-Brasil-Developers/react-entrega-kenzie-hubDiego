import { Link } from "react-router-dom"

export const Button = ({children, setLogin}) => {
    
    const logout = () => {
        if(setLogin != null){
            setLogin(null)
            localStorage.removeItem("@USER")
        }
    }

    return(
        <Link to="/" className="button" onClick={logout}>{children}</Link>
    )
}