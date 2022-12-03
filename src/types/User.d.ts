import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Document } from "mongoose";
import { CustomReqParams, CustomReqParamsBody } from "./Express";

declare global {
    namespace Express {
        export interface Request {
            user?: string | JwtPayload;
        }
    }
}

export interface UserModelProps extends Document, UserProps {
}

export interface UserProps {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picturePath: string;
    friends: array;
    location: string;
    occupation: string;
    viwedProfile: number;
    impressions: number;
}

export interface ReqIdProps {
    id?: string;
}

export interface ReqReadManyProps {
    startIndex?: number;
    endIndex?: number;
}

export interface CustomReqBodyParamsProps<T1, T2> extends Request {
    body: T1;
    params: T2;
}