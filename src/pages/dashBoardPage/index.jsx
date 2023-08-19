import { useContext } from "react"
import { Header } from "../../components/header"
import "./dashBoard.module.scss"
import { UserRoutinesContext } from "../../context/UserRoutinesContext"

export const DashBoard = () =>{
    const { user, logout } = useContext(UserRoutinesContext)
   
    return(
       <> 
            <Header>
                <button className="button" onClick={logout}>Sair</button>
            </Header>
            <main>
                <section className="container">
                    <div>
                        <h1 className="title">Olá, {user?.name}</h1>
                        <p className="headLine">{user?.course_module}</p>
                    </div>
                    <h2 className="title">Que pena! Estamos em desenvolvimento :(</h2>
                    <h2 className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</h2>
                </section>
            </main>
        </>
    )
}
