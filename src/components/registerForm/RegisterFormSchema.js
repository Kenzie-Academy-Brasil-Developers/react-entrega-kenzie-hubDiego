import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().nonempty("Informe um nome de usuario"),
  email: z
    .string()
    .nonempty("Informe um email")
    .email("Informe um endereço valido de email"),
  password: z
    .string()
    .nonempty("Informe uma senha")
    .min(8, "A senha deve conter no minimo 8 caracteres")
    .regex(/[A-Z]+/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]+/, "A senha deve conter pelo menos pelo menos uma letra minúscula")
    .regex(/[0-9]+/, "A senha deve conter pelo menos um numero")
    .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/, "A senha deve conter pelo menos pelo menos um silmbolo especial"),
  confirmPassword: z.string().nonempty("Confirme sua senha"),
  bio: z.string().nonempty("Adicione sua bio"),
  contact: z.string().nonempty("adicione um opção de contato"),
  course_module: z.string().nonempty("Selecione um imput"),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message:"As senhas devem ser iguais",
    path: ["confirmPassword"]
});
