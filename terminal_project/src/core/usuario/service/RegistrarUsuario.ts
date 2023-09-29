import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "@/core/usuario/model/Usuario";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";
import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {

    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) {
    }

    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto: string = this.provedorCripto.criptografar(usuario.senha)
        const usuarioExistente = await this.repositorio.buscarPorEmail(usuario.email)
        if (usuarioExistente) throw new Error(Erros.USUARIO_EXISTENTE)

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto
        }
        await this.repositorio.inserir(novoUsuario)
    }

}