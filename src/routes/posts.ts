import { Router } from "express"
import { postsController } from "../controllers/posts"
import { verifyToken } from "../middlewares/auth"
import { upload } from "../services/multer"

const router = Router()

router.post("/", verifyToken, upload.single("picture"), postsController.create)
router.get("/:id", verifyToken, upload.single("picture"), postsController.create)
router.get("/:startIndex/:endIndex", verifyToken, upload.single("picture"), postsController.create)
router.put("/:id", verifyToken, upload.single("picture"), postsController.create)
router.delete("/:id", verifyToken, upload.single("picture"), postsController.create)


export const postRoutes = router