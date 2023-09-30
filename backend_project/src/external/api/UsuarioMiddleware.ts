import { NextFunction, Request, Response } from "express"
import ProvedorJwt from "@/external/api/ProvedorJwt"
import * as process from "process"
import Usuario from "@/core/usuario/model/Usuario"
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario"

export default function UsuarioMiddleware(repositorio: RepositorioUsuario) {
    return async (req: Request, resp: Response, next: NextFunction) => {
        const acessoNegado = () => resp.status(403).send("Token invalido!")
        const token = req.headers.authorization?.replace("Bearer", "")

        if (!token) {
            acessoNegado()
            return
        }

        const usuarioToken: Usuario = new ProvedorJwt(process.env.JWT_SECRET!).obter(token) as Usuario
        const usuario = await repositorio.buscarPorEmail(usuarioToken.email)

        if (!usuario) {
            acessoNegado()
            return
        }

        (req as any).usuario = usuario

        next()
    }
}