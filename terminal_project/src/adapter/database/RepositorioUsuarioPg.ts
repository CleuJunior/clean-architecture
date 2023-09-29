import Usuario from "@/core/usuario/model/Usuario";
import db from "@/adapter/database/db";

export default class RepositorioUsuarioPg {
    private static readonly items: Usuario[] = []

    async inserir(usuario: Usuario): Promise<void> {
        await db.query(`INSERT INTO usuarios (id, nome, email, senha)
                        VALUES ($1, $2, $3, $4)`,
            [usuario.id, usuario.nome, usuario.email, usuario.senha])
    }

    async buscarPorEmail(email: String): Promise<Usuario | null> {
        const usuario = await db.oneOrNone(`SELECT *
                                            FROM usuarios
                                            WHERE email = $1`, [email])

        if (!usuario) return null

        return usuario
    }
}