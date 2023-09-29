import TerminalUtil from "@/util/TerminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import Carro from "@/core/fundamentos/Carro";
import Ferrari from "@/core/fundamentos/Ferrari";
import corrida from "@/core/fundamentos/Corrida";
import Civic from "@/core/fundamentos/Civic";
import {terminal} from "terminal-kit";

export default async function dip(): Promise<void> {
    TerminalUtil.titulo('DIP')
    const [tipoCarro] = await TerminalUtil.selecao("Tipo de carro?", [
        "Fusca", "Civic", "Ferrari"
    ])

    let carro: Carro
    switch (tipoCarro) {
        case 0:
            carro = new Fusca()
            break
        case 1:
            carro = new Civic()
            break
        default:
            carro = new Ferrari()
    }

    corrida(carro, terminal.brightRed)
    await TerminalUtil.esperarEnter()
}