import { forwardRef } from "react"
import  styles  from "../input/input.module.scss"

export const Input = forwardRef(({error, label, ...rest}, ref) => {
    return(
        <div className={styles.inputBox}>
            <label className="headLine">{label}</label>
            <input {...rest} ref={ref}/>
            {error ? <p className="headLine bold">{error.message}</p>: null}
        </div>
    )
})