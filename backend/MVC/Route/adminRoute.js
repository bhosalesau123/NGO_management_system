import express from "express"
import { getNgoController,ngoUpdateController,deleteNgoController} from "../Controllers/Ngo.js";
import {requireSignIn} from "../../Middleware/Auth.js"
const router = express.Router();

router.get("/pending-ngos", getNgoController);
router.delete("delete-ngo",deleteNgoController)

export default router;