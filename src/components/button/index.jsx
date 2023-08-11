import { useNavigate } from "react-router"

export const Button = ({children, setLogin}) => {
    const navigate = useNavigate()
    
    const logout = () => {
        navigate("/")
        setLogin(null)
        localStorage.removeItem("@USER")
    }

    return(
        <button className="button" onClick={logout}>{children}</button>
    )
}