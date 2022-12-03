import mongoose, { mongo } from "mongoose";
import paginate from "mongoose-paginate-v2"
import { UserModelProps } from "../types/User";


const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        picturePath: {
            type: String,
            default: ""
        },
        friends: {
            type: mongo.ObjectId,
            default: []
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    {
        timestamps: true
    }
)

UserSchema.plugin(paginate)

export const User = mongoose.model<UserModelProps, mongoose.PaginateModel<UserModelProps>>("User", UserSchema)