import { ngoLoginController, ngoRegisterController} from "../Controllers/User";


const router = express.Router();

router.post("/register", ngoRegisterController);
router.post("/login", ngoLoginController);