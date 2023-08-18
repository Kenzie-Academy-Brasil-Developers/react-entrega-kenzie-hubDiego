import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom"
import { UserRoutinesProvider } from "./context/UserRoutinesContext"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserRoutinesProvider>
        <App />
      </UserRoutinesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
