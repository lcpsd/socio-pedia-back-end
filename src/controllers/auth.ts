import { Response } from "express"
import { User } from "../models/User.js"
import { login } from "../types/Auth.js"
import { CustomRequest } from "../types/Express"
import { UserModelProps } from "../types/User"
import { userController } from "./user.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const authController = {
    async register(req: CustomRequest<UserModelProps>, res: Response) {
        try {
            await userController.create(req, res)
        } catch (error) {
            res.status(500)
        }
    },
    async login(req: CustomRequest<login>, res: Response) {
        try {
            const { email, password } = req.body
            let checkUser = await User.findOne({ email })
            const jwtSecret = process.env.JWT_SECRET

            if (!checkUser) {
                return res.status(404).json({ msg: "User not found." })
            }

            const checkPasswd = await bcrypt.compare(password, checkUser.password)

            if (!checkPasswd) {
                return res.status(400).json({ msg: "Invalid credentials." })
            }

            if (!jwtSecret) {
                return res.status(500)
            }

            const token = jwt.sign({ id: checkUser.id }, jwtSecret)

            checkUser.password = ""

            res.status(200).json({ token, checkUser })
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}