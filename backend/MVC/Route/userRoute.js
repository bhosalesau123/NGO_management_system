import express from "express"
import { userLoginController, userRegisterController} from "../Controllers/User.js";


const router = express.Router();

router.post("/register", userRegisterController);
router.post("/login", userLoginController);

export default router;