import { useContext } from "react"
import { RoutesMain } from "./routes"
import { UserRoutinesContext } from "./context/UserRoutinesContext"
import { LoadingIcon } from "./components/Loading"
import "./style/index.scss"

function App() {
  const {loading} = useContext(UserRoutinesContext)

  return (
    <>
      {loading ? <LoadingIcon/>: <RoutesMain/>}
    </>
  )
}

export default App
