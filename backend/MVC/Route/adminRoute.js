import express from "express"
import { adminLoginController, adminRegisterController} from "../Controllers/Admin.js";

const router = express.Router();

router.post("/register", adminRegisterController);
router.post("/login", adminLoginController);

export default router;