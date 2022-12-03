import { Router } from "express"
import { userController } from "../controllers/user"
import { verifyToken } from "../middlewares/auth"

const router = Router()

router.post("/", verifyToken, userController.create)
router.get("/:id", verifyToken, userController.read)
router.get("/:startIndex/:endIndex", userController.readMany)
router.put("/:id", verifyToken, userController.update)
router.delete("/:id", verifyToken, userController.delete)

export const userRoutes = router