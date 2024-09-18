import express from "express"
import { userLoginController, userRegisterController,getUserProfile,userUpdateController} from "../Controllers/User.js";
import {requireSignIn} from "../../Middleware/Auth.js"

   const router = express.Router();

router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.get("/UserProfile",requireSignIn,getUserProfile)
router.patch("/update-profile",requireSignIn)

export default router