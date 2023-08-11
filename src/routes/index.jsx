import { useState } from "react";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoard } from "../pages/dashBoardPage";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify"

export const RoutesMain = () => {
    const [login, setLogin] = useState()
    return(
        <>
        <Routes>
            <Route path="/" element={<LoginPage setLogin={setLogin}/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/dashboard" element ={<DashBoard login={login} setLogin={setLogin}/>} />
        </Routes>
        <ToastContainer/>
        </>
    )
}