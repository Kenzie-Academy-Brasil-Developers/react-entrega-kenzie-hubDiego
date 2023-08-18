import { useContext } from "react"
import { UserRoutinesContext } from "../../context/UserRoutinesContext"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes = () => {
    const  { user } = useContext( UserRoutinesContext )

    return user ? <Outlet /> : <Navigate to="/"/>
}