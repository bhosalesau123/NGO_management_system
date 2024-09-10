import adminModel from "../Model/userModel.js"
import { hashPassword, comparePassword } from "../../Helper/Hash.js"; 
import dotenv from "dotenv";

dotenv.config();


export const adminLoginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      // check if user exists
      const admin = await adminModel.findOne({ email });
      if (!admin) {
        return res.status(404).send("user not found");
      }
      // check if password is correct
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Invalid credentials");
      }

      const token = jwt.sign({ id:admin._id, role:admin.role }, JWT_SECRET, { expiresIn: "7d" });
  
     
      res.status(200).send({
        status: "succes",
        message: "admin loged in successfully",
        admin,
        token
      });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
 