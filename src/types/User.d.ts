import { Document } from "mongoose";

export interface UserModelProps extends Document, UserProps {
}

export interface UserProps {
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