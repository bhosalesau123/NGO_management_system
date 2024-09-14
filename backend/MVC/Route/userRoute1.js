import express from "express"
import { userLoginController, userRegisterController,getUserProfile,userUpdateController} from "../Controllers/User.js";


const router = express.Router();

router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.get("/UserProfile",getUserProfile)
router.patch("/update-profile",userUpdateController)

export default router;