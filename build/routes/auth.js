import { Router } from "express";
import { userController } from "../controllers/user";
import { upload } from "../services/multer";
const router = Router();
router.post("/auth/user", upload.single("picture"), userController.create);
export const authRoutes = router;
