import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoard } from "../pages/dashBoardPage";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify"
import { PrivateRoutes } from "../routes/PrivateRoutes/index";
import { TechProvider } from "../context/TechContext";

export const RoutesMain = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/dashboard" element={<PrivateRoutes/>}>
                <Route index element={<TechProvider><DashBoard/></TechProvider>} />
            </Route>
        </Routes>
        <ToastContainer/>
        </>
    )
}