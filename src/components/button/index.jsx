import { useNavigate } from "react-router-dom"

export const Button = ({children, setLogin}) => {
    const navigate = useNavigate()
    
    const logout = () => {
        navigate("/")
        if(setLogin != null){
            setLogin(null)
            localStorage.removeItem("@USER")
        }
    }

    return(
        <button className="button" onClick={logout}>{children}</button>
    )
}