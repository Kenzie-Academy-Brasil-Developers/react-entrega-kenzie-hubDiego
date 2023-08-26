import { forwardRef, useState } from "react"
import {MdVisibility, MdVisibilityOff} from "react-icons/md"
import style from "./passwordInput.module.scss"

export const PasswordImput = forwardRef(({error, label, ...rest}, ref) => {
    const[isHidden, setisHidden] = useState(true)

    return(
        <div className={style.inputBox}>
            <label className="headLine">{label} </label>
                <div className={style.inputGrid}>
                    <input type={isHidden ? "password" : "text"} {...rest} ref={ref}/>
                    <button type="button" onClick={() => setisHidden(!isHidden)}>{isHidden ? <MdVisibility/> : <MdVisibilityOff/> }</button>
                </div>
           
            {error ? <p className="headLine bold error">{error.message}</p>: null}
        </div>
    )
})