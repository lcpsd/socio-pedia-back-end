import { Request } from "express";

export interface CustomReqBody<T> extends Request {
    body: T;
}

export interface CustomReqParams<T> extends Request {
    params: T;
}

export interface CustomReqParamsBody<T1, T2> extends Request {
    params: T1;
    body: T2;
}