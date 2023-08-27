import { useForm } from "react-hook-form"
import { Input } from "../../input"
import { Select } from "../../Select"
import { useContext } from "react"
import { TechContext } from "../../../context/TechContext"
import {AiOutlineClose} from "react-icons/ai"
import { zodResolver } from "@hookform/resolvers/zod"
import { createTechSchema } from "./createTechSchema"
import style from "./CreateTech.module.scss"
import { useKeyDown } from "../../../hooks/useKeyDown"
import { useOutClick } from "../../../hooks/useOutClick"

export const ModalAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createTechSchema)
    })

    const { addTechnology, setIsOpen } = useContext(TechContext)
    
    const submit = (formData) => {
        addTechnology(formData)
    }

    const modalRef = useOutClick(() => {
        setIsOpen(false)
    })

    const buttonRef = useKeyDown("Escape", () => {
        setIsOpen(false)
    })
     
    return(
        <div role="dialog" className={style.modalOverlay}>
            <div ref={modalRef} className={style.modalBox}>
                <div className={style.modalHeader}>
                    <p className="title three">Cadastrar Tecnologia</p>
                    <button ref={buttonRef} className= {style.closeButton} onClick={() => setIsOpen(false)}><AiOutlineClose/></button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" placeholder="Informe uma tecnologia" type="text" id="TechName"{...register("title")} error={errors.title} />
                    <Select label="Selecionar status" {...register("status")} error={errors.status}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </Select>
                    <button className="button--register submit" type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </div>
    )
}