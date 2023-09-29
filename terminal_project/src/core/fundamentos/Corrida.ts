import Carro from "@/core/fundamentos/Carro";

export default function corrida(carro: Carro, logger: (str: string) => void = console.log): void {

    Array.from({length: 8}).forEach(() => {
        carro.acelerar()
        logger(`\nVelocidade: ${carro.velocidadeAtual}`)
    })

    Array.from({length: 8}).forEach((): void => {
        carro.frear()
        logger(`\nVelocidade: ${carro.velocidadeAtual}`)
    })
}