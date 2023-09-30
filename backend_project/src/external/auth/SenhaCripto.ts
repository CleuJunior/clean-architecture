import bcrypt from "bcrypt"
import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia"

export default class SenhaCripto implements ProvedorCriptografia {
    criptografar(texto: string | undefined): string {
        const salt = bcrypt.genSaltSync(10)
        // @ts-ignore
        return bcrypt.hashSync(texto, salt)
    }

    comparar(senha: string, senhaCriptografada: string): boolean {
        return bcrypt.compareSync(senha, senhaCriptografada)
    }
}
