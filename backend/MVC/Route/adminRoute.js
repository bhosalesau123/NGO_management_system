import express from "express"
import { getNgoController,ngoUpdateController,deleteNgoController} from "../Controllers/Ngo.js";

const router = express.Router();

router.get("/pending-ngos", getNgoController);
// router.patch("update-ngo", ngoUpdateController)
router.delete("delete-ngo",deleteNgoController)

export default router;