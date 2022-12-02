import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
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
    friend: {
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}, {
    timestamps: true
});
export const User = mongoose.model("User", UserSchema);
