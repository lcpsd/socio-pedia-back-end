import { Request, Response } from "express";
import { CustomReqParams } from "../types/Express";
import { ReqReadManyProps } from "../types/User";

export const postsController = {
    async create(req: Request, res: Response) {
        try {

            return res.status(200).json({})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    },

    async read(req: Request, res: Response) {
        try {

            return res.status(200).json({})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    },

    async readMany(req: CustomReqParams<ReqReadManyProps>, res: Response) {
        try {

            return res.status(200).json({})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    },

    async readFeed(req: Request, res: Response) {
        try {

            return res.status(200).json({})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    },

    async readUser(req: Request, res: Response) {
        try {

            return res.status(200).json({})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    },

    async update(req: Request, res: Response) {
        try {

            return res.status(200).json({})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    },

    async delete(req: Request, res: Response) {
        try {

            return res.status(200).json({})
        } catch (error) {
            console.log(error)
            return res.status(500)
        }
    }
}