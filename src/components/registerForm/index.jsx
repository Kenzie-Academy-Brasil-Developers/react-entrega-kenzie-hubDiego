import {Input} from "../input/index"
import {PasswordImput} from "../InputPassword"
import { Select } from "../../components/Select"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./RegisterFormSchema"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import "./registerForm.module.scss"
import "react-toastify/dist/ReactToastify.css"

export const RegisterForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const userRegister = async (formData) =>{
        try{
            await api.post("/users", formData)
            toast.success("Conta criada com sucesso!")
            navigate("/")
        }catch(error){
            toast.error("Ops! Algo deu errado")
            console.log(error)
        }
    }

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
            <Select {...register("course_module")} error={errors.module}/>
            <button type="submit" className="button--register disable">Cadastrar</button>
        </form>
    )
}