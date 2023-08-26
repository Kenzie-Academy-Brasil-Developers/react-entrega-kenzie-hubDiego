import { z } from "zod"

export const createTechSchema = z.object({
    title: z
    .string()
    .nonempty("Informe uma tecnologia"),
    status: z.string().nonempty("Selecione um imput"),
})
