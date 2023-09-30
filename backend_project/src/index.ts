import dotenv from "dotenv"
import express, { Express } from "express"
import * as process from "process"
import RepositorioUsuarioPg from "@/external/db/RepositorioUsuarioPg"
import SenhaCripto from "@/external/auth/SenhaCripto"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import RegistraUsuarioController from "@/external/api/RegistraUsuarioController"

dotenv.config()

const app: Express = express()
const port: string | 4000 = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => {
    console.log("SERVER_UP")
})

// --------------------- Rotas Abertas --------------------- //

const repositorioUsuario = new RepositorioUsuarioPg()
const provedotrCripto = new SenhaCripto()
const registraUsuario = new RegistrarUsuario(
    repositorioUsuario,
    provedotrCripto
)

new RegistraUsuarioController(app, registraUsuario)