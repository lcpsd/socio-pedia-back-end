import { Router } from "express";
import { authController } from "../controllers/auth.js";
import { upload } from "../services/multer.js";
const router = Router();
router.post("/user", upload.single("picture"), authController.register);
router.post("/login", authController.login);
export const authRoutes = router;
