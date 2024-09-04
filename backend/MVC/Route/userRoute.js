import { userLoginController, userRegisterController} from "../Controllers/User";


const router = express.Router();

router.post("/register", userRegisterController);
router.post("/login", userLoginController);
