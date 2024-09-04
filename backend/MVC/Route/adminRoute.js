import { adminLoginController, adminRegisterController} from "../Controllers/User";


const router = express.Router();

router.post("/register", adminRegisterController);
router.post("/login", adminLoginController);