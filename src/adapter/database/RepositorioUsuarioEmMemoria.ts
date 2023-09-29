import Usuario from "@/core/usuario/model/Usuario";

export default class RepositorioUsuarioEmMemoria {
    private static readonly items: Usuario[] = []

    async inserir(usuario: Usuario): Promise<void> {
        const items: Usuario[] = RepositorioUsuarioEmMemoria.items
        const usuarioExistente = await this.buscarPorEmail(usuario.email)
        if (usuarioExistente) return
        items.push(usuario)
    }

    async buscarPorEmail(email: String): Promise<Usuario | null> {
        const items: Usuario[] = RepositorioUsuarioEmMemoria.items
        return items.find(u => u.email === email) ?? null
    }
}