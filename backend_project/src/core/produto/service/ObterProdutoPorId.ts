import CasoDeUso from "@/core/shared/CasoDeUso"
import Produto from "@/core/produto/service/model/Produto"
import Usuario from "@/core/usuario/model/Usuario"

export type Entrada = {
    produtoId: string
    usuario: Usuario
}
export default class ObterProdutoPorId implements CasoDeUso<Entrada, Produto> {

    async executar(entrada: Entrada): Promise<Produto> {

        return {
            id: entrada.produtoId,
            nome: "Nome 1",
            preco: 10.99,
            consultadoPor: entrada.usuario.email
        }
    }

}