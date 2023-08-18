import Loading from "../../assets/Ellipsis-1s-200px.svg"
import style from "./style.module.scss"

export const LoadingIcon  = () => {
    return(
        <div className={style.loadingBox}>
            <img src={Loading} alt="Loading" />
        </div>
    )
}