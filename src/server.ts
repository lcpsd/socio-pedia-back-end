import { app } from "./app.js"
import setupServer from "./config/server.js"
import { connectMongo } from "./services/mongodb.js"

// Config app server
setupServer()

// Start server and databse
const PORT = process.env.PORT || 6001

try {
    await connectMongo()
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
} catch (err) {
    console.log(`Server error: ${err}`)
}
