import {Terminal, terminal} from 'terminal-kit'

export default class TerminalUtil {
    static titulo(texto: string): void {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta(`-`.repeat(texto.length) + '\n')
    }

    static limpar(): void {
        terminal.clear()
    }

    static exibirChaveValor(chave: string, valor: any): void {
        terminal.yellow(chave).green(valor).white('\n')
    }

    static async menu(opcoes: string[]): Promise<[number, string]> {
        const resposta: Terminal.SingleLineMenuResponse = await terminal.singleLineMenu(
            opcoes
        ).promise

        return [
            resposta.selectedIndex,
            resposta.selectedText
        ]
    }

    static async selecao(text: string, opcoes: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${text}`)
        const resposta: Terminal.SingleLineMenuResponse = await terminal.singleLineMenu(opcoes).promise
        return [resposta.selectedIndex, resposta.selectedText]
    }

    static async confirmacao(text: string): Promise<Boolean> {
        terminal.yellow(`\n${text}`)
        const resposta: Terminal.SingleLineMenuResponse = await terminal.singleLineMenu(['Sim', 'Nao']).promise
        return resposta.selectedIndex === 0
    }
}