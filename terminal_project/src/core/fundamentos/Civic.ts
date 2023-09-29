import Carro from "./Carro";

export default class Civic implements Carro {
    constructor(readonly velocidadeMaxima: number = 260, private _velocidadeAtual: number = 0) {
    }

    acelerar(): void {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 28, this.velocidadeMaxima)
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 21, 0)
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual
    }

}