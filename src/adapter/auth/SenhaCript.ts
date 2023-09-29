import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";
import bcrypt from 'bcrypt'

export default class SenhaCript implements ProvedorCriptografia {
    criptografar(texto: string): string {
        return bcrypt.hashSync(texto, bcrypt.genSaltSync(10))
    }
}