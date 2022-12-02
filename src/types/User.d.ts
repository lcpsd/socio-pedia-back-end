import { Document } from "mongoose";

export interface UserProps extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picturePath: string;
    friend: array;
    location: string;
    occupation: string;
    viwedProfile: number;
    impressions: number;
}