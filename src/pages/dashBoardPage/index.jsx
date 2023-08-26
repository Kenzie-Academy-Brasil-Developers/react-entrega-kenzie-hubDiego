import { useContext } from "react"
import { Header } from "../../components/header"
import { TechList } from "../../components/TechList"
import style from  "./dashBoard.module.scss"
import { EditTechModal } from "../../components/Modals/EditTechModal"
import { UserRoutinesContext } from "../../context/UserRoutinesContext"
import { TechContext } from "../../context/TechContext"

export const DashBoard = () =>{
    const { user, logout } = useContext(UserRoutinesContext)
    const { editingTech } = useContext(TechContext)

    return(
       <> 
            <Header>
                <button className="button" onClick={logout}>Sair</button>
            </Header>
            <main>
                <section className={`container ${style.containerDashboard}`}>
                    <div >
                        <h1 className="title">Olá, {user?.name}!</h1>
                        <p className="headLine">{user?.course_module}</p>
                    </div>
                </section>
                 <TechList/>
                 {editingTech ? <EditTechModal/> : null}
            </main>
        </>
    )
}