import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

// Na arquitetura hexagonal esta classe é um adaptador
// O adaptador NAO faz parte do CORE da aplicacao
export default class InverterSenhaCripto implements ProvedorCriptografia {
    criptografar(senha: string): string {
        return senha.split('').reverse().join('')
    }
}