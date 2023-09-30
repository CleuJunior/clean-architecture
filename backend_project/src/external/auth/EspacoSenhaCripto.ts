import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

export default class EspacoSenhaCripto implements ProvedorCriptografia {

    criptografar(texto: string | undefined): string {
        return texto.split('').join(' ')
    }
}