import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

// Na arquitetura hexagonal esta classe é um adaptador
// O adaptador NAO faz parte do CORE da aplicacao
export default class EspacoSenhaCripto implements ProvedorCriptografia {
    criptografar(texto: string): string {
        return texto.split('').join(' ');
    }

}