import { JwtPayload } from "jsonwebtoken";
import { Document } from "mongoose";

declare global {
    namespace Express {
        export interface Request {
            user: string | JwtPayload;
        }
    }
}

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

interface ReqIdProps {
    id: string;
}

interface ReqReadAllProps {
    startIndex: number;
    endIndex: number;
}