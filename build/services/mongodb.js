import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectMongo = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI ?? "", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log("DB OK"));
    }
    catch (error) {
        throw (error);
    }
};
