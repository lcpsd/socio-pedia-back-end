import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        let token = req.header("Authorization")



        if (!token) {
            return res.status(403).send("Access denied.")
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimStart()
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).send("jwt")
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET)

        req.user = verified

    } catch (error) {
        console.log(error)
        res.status(500)
    }
}