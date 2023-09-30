import pgPromise from "pg-promise";

const pgp = pgPromise()

const db = pgp({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: "postgres",
    password: "postgres",
})

export default db