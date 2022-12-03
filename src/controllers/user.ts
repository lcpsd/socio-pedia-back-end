import { ReqIdProps, ReqReadManyProps, CustomReqBodyParamsProps, UserModelProps, UserProps } from "../types/User";
import bcrypt from "bcrypt"
import { Response } from "express";
import { CustomReqBody, CustomReqParams } from "../types/Express";
import { User } from "../models/User.js";
import { PaginateOptions } from "mongoose";

export const userController = {
    async create(req: CustomReqBody<UserModelProps>, res: Response) {
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
    async read(req: CustomReqParams<ReqIdProps>, res: Response) {
        try {
            const page = req.params

            if (!page) {
                const user = await User
                    .findOne({ id: req.params.id }, '-password')

                return res.status(200).json({ ...user })
            }

            const users = await User.paginate({}, { page: page, limit: 50, } as PaginateOptions,
                (err, result) => {
                    if (err) {
                        throw new Error(err)
                    }

                    return result.docs
                })

            const sanitized = users.docs.map(user => user.password = "")

            return res.status(200).json({ ...sanitized })


        } catch (error) {
            console.log(error)
            res.status(500)
        }
    },

    async update(req: CustomReqBodyParamsProps<Partial<UserProps>, ReqIdProps>, res: Response) {
        try {
            const { id } = req.params

            let updatedUser = await User.findOneAndUpdate(
                { id }, req.body, { new: true }
            )

            if (!updatedUser) {
                return res.status(404).json({ msg: "User not found" })
            }

            const friends = await Promise.all(
                updatedUser?.friends.map((id: string) => User.findById(id))
            )

            const sanitizedFriends = friends.map(({
                id,
                firstName,
                lastName,
                occupation,
                location,
                picturePath
            }: UserProps) => {
                return {
                    id,
                    firstName,
                    lastName,
                    occupation,
                    location,
                    picturePath
                }
            })

            if (updatedUser) {
                updatedUser.password = ""

                return res.status(200).json({ ...updatedUser, friends: sanitizedFriends })
            }

            throw new Error("Incorrect params")
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    },

    async delete(req: CustomReqBody<ReqIdProps>, res: Response) {

    },
}