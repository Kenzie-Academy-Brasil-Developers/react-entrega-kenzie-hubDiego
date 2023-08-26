import { forwardRef } from "react"
import "./select.module.scss"

export const Select = forwardRef(({label,children, error, ...rest }, ref, ) =>{
    return(
        <>
            <label className="headLine">{label}
            <select {...rest} ref={ref}>
                {children}
            </select>
            </label>
            {error ? <p className="headLine bold">{error.message}</p> : null}
        </>
    )
})