import express from "express"
import dotenv from "dotenv"
import configServer from "./config/server.js"
import { connectMongo } from "./services/mongodb.js"

dotenv.config()

// Config app server
const app = express()
configServer(app)

// Start server and databse
const PORT = process.env.PORT || 6001

try {
    await connectMongo()
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
} catch (err) {
    console.log(`Server error: ${err}`)
}
