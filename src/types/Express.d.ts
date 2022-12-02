import { Request } from "express";

export interface CustomReqBody<T> extends Request {
    body: T;
}

export interface CustomReqParams<T> extends Request {
    params: T;
}