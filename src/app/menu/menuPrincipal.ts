import TerminalUtil from "@/util/TerminalUtil"
import {terminal} from "terminal-kit"
import menuFundamentos from "./menuFundamentos"
import menuUsuario from "@/app/menu/menuUsuario";

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const resposta = await terminal.singleColumnMenu([
        '1. Fundamentos',
        '2. Usuário',
        'Sair'

    ]).promise

    switch (resposta.selectedIndex) {
        case 0:
            await menuFundamentos();
            break
        case 1:
            await menuUsuario();
            break
        case 2:
            process.exit(0)
    }

    menuPrincipal
}