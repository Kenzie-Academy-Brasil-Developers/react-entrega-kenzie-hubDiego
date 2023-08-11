import { Header } from "../../components/header"
import { Button } from "../../components/button"
import Logo from "../../assets/Logo.png"
import "./dashBoard.module.scss"

export const DashBoard = ({login, setLogin}) =>{
    return(
       <> 
            <Header>
                <div className="container">
                <img src={Logo} alt="KenzieHub Logo" />
                <Button setLogin={setLogin}>Sair</Button>
                </div>
            </Header>
            <main>
                <section className="container">
                    <div>
                        <h1 className="title">Olá, {login?.name}</h1>
                        <p className="headLine">{login?.course_module}</p>
                    </div>
                    <h2 className="title">Que pena! Estamos em desenvolvimento :(</h2>
                    <h2 className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</h2>
                </section>
            </main>
        </>
    )
}