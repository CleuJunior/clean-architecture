import TerminalUtil from "@/util/TerminalUtil"
import registrarUsuario from "@/app/usuario/registrarUsuario";

export default async function menuUsuario(): Promise<void> {
    TerminalUtil.titulo('Usuário')

    const [indice] = await TerminalUtil.menu([
        '1. Registrar',
        'Voltar'
    ])

    switch (indice) {
        case 0:
            await registrarUsuario()
            break
        default:
            return
    }

    await menuUsuario()
}