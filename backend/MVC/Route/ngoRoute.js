import express from "express"
import { ngoLoginController, ngoRegisterController,getNgoController} from "../Controllers/Ngo.js";


const router = express.Router();

router.post("/ngo-register", ngoRegisterController);
router.post("/login", ngoLoginController);
router.get("/Ngo", getNgoController);


export default router;