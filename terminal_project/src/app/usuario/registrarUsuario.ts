import TerminalUtil from "@/util/TerminalUtil";
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";
import SenhaCript from "@/adapter/auth/SenhaCript";
import RepositorioUsuarioPg from "@/adapter/database/RepositorioUsuarioPg";

export default async function registrarUsuario(): Promise<void> {
    const {campoRequerido, titulo, sucesso, erro, esperarEnter} = TerminalUtil

    titulo('Registrar Usuário')

    const nome: string = await campoRequerido('Nome: ')
    const email: string = await campoRequerido('Email: ')
    const senha: string = await campoRequerido('Senha: ')

    const usuario: Usuario = {nome, email, senha}

    try {
        const repositorio = new RepositorioUsuarioPg()
        const provedorCripto: ProvedorCriptografia = new SenhaCript()
        const casDeUso: RegistrarUsuario = new RegistrarUsuario(repositorio, provedorCripto)

        await casDeUso.executar(usuario)
        await sucesso('Usuario registrado com sucesso!')
    } catch (e: any) {
        await erro(e.message)
    } finally {
        await esperarEnter()
    }
}