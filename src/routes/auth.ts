import { Router } from "express"
import { authController } from "../controllers/auth.js"
import { verifyToken } from "../middlewares/auth.js"
import { upload } from "../services/multer.js"

const router = Router()

router.post("/register", upload.single("picture"), verifyToken, authController.register)
router.post("/login", authController.login)

export const authRoutes = router