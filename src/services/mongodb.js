import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectMongo = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}