import { Express } from "express"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"

export default class RegistraUsuarioController {

    constructor(servidor: Express, casoDeUso: RegistrarUsuario) {
        servidor.post("/api/v1/usuarios/registrar", async (req, resp) => {
            try {
                await casoDeUso.executar({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })
                resp.status(201).send()
            } catch (e: any) {
                resp.status(400).send(e.message)
            }
        })
    }
}