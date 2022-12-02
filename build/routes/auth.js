import { Router } from "express";
import { userController } from "../controllers/user.js";
import { upload } from "../services/multer.js";
const router = Router();
router.post("/auth/user", upload.single("picture"), userController.create);
export const authRoutes = router;
