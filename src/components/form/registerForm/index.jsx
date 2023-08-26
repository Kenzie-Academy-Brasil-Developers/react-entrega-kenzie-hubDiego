import { Input } from "../../input/index"
import { PasswordImput } from "../../InputPassword"
import { Select } from "../../Select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./RegisterFormSchema"
import { useContext } from "react"
import { UserRoutinesContext } from "../../../context/UserRoutinesContext"
import "./registerForm.module.scss"
import "react-toastify/dist/ReactToastify.css"

export const RegisterForm = () => {
    const { userRegister } = useContext(UserRoutinesContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const submit = (formData) => {
        userRegister(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input placeholder="Digite o seu nome" label="Nome" type="text" id="name" {...register("name")} error={errors.name}/>
            <Input placeholder="Digite aqui seu email" label="Email" type="email" id="email" {...register("email")} error={errors.email}/>
            <PasswordImput placeholder="Digite aqui sua senha" label="Senha" id="password" {...register("password")} error={errors.password}/>
            <PasswordImput placeholder="Digite aqui sua senha" label="Confirma Senha" id="confirmPassword" {...register("confirmPassword")} error={errors.confirmPassword}/>
            <Input placeholder="Fale sobre você" label="Bio" type="text" id="bio" {...register("bio")} error={errors.bio}/>
            <Input placeholder="Opção de contato" label="Contato" type="text" id="contact" {...register("contact")} error={errors.contact} />
            <Select label="Selecionar módulo" {...register("course_module")} error={errors.module}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
            </Select>
            <button type="submit" className="button--register disable">Cadastrar</button>
        </form>
    )
}