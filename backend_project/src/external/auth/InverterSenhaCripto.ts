import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

// Na arquitetura hexagonal esta classe é um Adaptador!
// O adaptador NÃOOOOO faz parte do core da sua aplicação
export default class InverterSenhaCripto implements ProvedorCriptografia {
    criptografar(texto: string | undefined): string {
        // @ts-ignore
        return texto.split('').reverse().join('')
    }

    comparar(senha: string, senhaCriptografada: string): boolean {
        return this.criptografar(senha) === senhaCriptografada
    }
}