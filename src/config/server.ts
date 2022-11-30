import path from "path"
import express from "express"
import { fileURLToPath } from "url"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser, { OptionsJson } from "body-parser"
import cors from "cors"
import { app } from "../app.js"
import dotenv from "dotenv"

export default () => {

    dotenv.config()

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    app.use(express.json())

    app.use(helmet())
    app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))

    app.use(morgan("common"))

    app.use(bodyParser.json({ limit: "30mb", extended: true } as OptionsJson))
    app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

    app.use(cors())

    app.use("/assets", express.static(path.join(__dirname, "public/assets")))

}