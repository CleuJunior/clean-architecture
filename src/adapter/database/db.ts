import pgPromise from "pg-promise";
import * as process from "process";

const db = pgPromise()({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: "arqhex",
    user: "postgres",
    password: "postgres",
})

export default db