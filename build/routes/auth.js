import Express from "express";
import { userController } from "../controllers/user";
import { upload } from "../services/multer";
const router = Express.Router();
router.post("/user/create", upload.single("picture"), userController.create);
export const authRoutes = router;
