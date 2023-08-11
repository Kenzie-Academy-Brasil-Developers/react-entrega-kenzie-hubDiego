import { z } from "zod"

export const loginFormSchema = z.object({
    email: z
    .string()
    .nonempty("Informe um email")
    .email("Informe um endereço valido de email"),
    password: z
    .string()
    .nonempty("Informe uma senha"),
})

