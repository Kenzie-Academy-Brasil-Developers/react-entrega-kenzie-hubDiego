import { forwardRef } from "react"
import "./select.module.scss"

export const Select = forwardRef(({error, ...rest}, ref) =>{
    return(
        <>
            <label className="headLine">Selecionar módulo
            <select {...rest} ref={ref}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </select>
            </label>
            {error ? <p className="headLine bold">{error.message}</p> : null}
        </>
    )
})