import express from "express"
import { ngoLoginController, ngoRegisterController,getNgoController,approveNGO, ngoUpdateController,deleteNgoController} from "../Controllers/Ngo.js";
import {requireSignIn} from "../../Middleware/Auth.js"

const router = express.Router();

router.post("/ngo-register", ngoRegisterController);
router.post("/login", ngoLoginController);
router.get("/Ngo", getNgoController);
router.patch("/approve/:id", approveNGO);
router.patch("/update/:id",  ngoUpdateController);
router.delete("/delete/:id", deleteNgoController );



export default router;