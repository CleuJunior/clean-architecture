import TerminalUtil from "@/util/TerminalUtil"
import Carro from "@/core/fundamentos/Carro";
import Fusca from "@/core/fundamentos/Fusca";
import Ferrari from "@/core/fundamentos/Ferrari";

export default async function polimorfismo(): Promise<void> {
    TerminalUtil.titulo('Polimorfismo')

    const [tipoCarro]: [number, string] = await TerminalUtil.selecao('Tipo de Carro?', ['Ferrari', 'Fusca'])
    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca()

    while (true) {
        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor('Velocidade Máxima: ', `${carro.velocidadeMaxima}km/h`)
        TerminalUtil.exibirChaveValor('Velocidade Atual: ', `${carro.velocidadeAtual}km/h`)

        const [opcao]: [number, string] = await TerminalUtil.selecao('Qual opçao?', ['Acelerar', 'Frear'])

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar: Boolean = await TerminalUtil.confirmacao('Deseja Continuar?')
        if (!continuar) return
    }
}