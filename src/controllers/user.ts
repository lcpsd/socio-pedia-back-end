import { UserModelProps } from "../types/User";
import bcrypt from "bcrypt"
import { Response } from "express";
import { CustomRequest } from "../types/Express";
import { User } from "../models/User.js";

export const userController = {
    async create(req: CustomRequest<UserModelProps>, res: Response) {
        try {
            const body = req.body

            const salt = await bcrypt.genSalt()
            const passwordHash = await bcrypt.hash(body.password, salt)

            const newUser = new User({
                ...req.body,
                password: passwordHash,
                viewedProfile: Math.floor(Math.random() * 10000),
                impressions: Math.floor(Math.random() * 10000)
            })

            const data = await newUser.save()
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    },
    async read() {

    },

    async update(data: Partial<UserModelProps>) {

    },

    async delete(id: string) {

    },
}