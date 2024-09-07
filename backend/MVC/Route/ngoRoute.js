import express from "express"
import { ngoLoginController, ngoRegisterController} from "../Controllers/Ngo.js";


const router = express.Router();

router.post("/register", ngoRegisterController);
router.post("/login", ngoLoginController);

export default router;