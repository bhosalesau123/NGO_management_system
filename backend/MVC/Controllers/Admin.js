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

      const token = jwt.sign({ id:admin._id, role:admin.role }, JWT_SECRET, { expiresIn: "3h" });
  
      res.status(201).send({
        status: "success",
        message: "Admin registered successfully",
        admin: newAdmin,
        token
      });
      res.status(200).send({
        status: "succes",
        message: "user loged in successfully",
        admin,
      });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
  export const adminRegisterController = async (req, res) => {
    try {
      const { name, lastname,email, phone,password} = req.body;
  
      
          // Validation
          if (!name) return res.status(400).send("Name is required");
          if (!lastname) return res.status(400).send("Lastname is required");
          if (!email) return res.status(400).send("Email is required");
          if (!phone) return res.status(400).send("Phone is required");
          if (!password) return res.status(400).send("Password is required");
  
          // Existing user validation
          const existingAdmin = await adminModel.findOne({ email });
          if (existingAdmin) {
            return res.status(400).send("User already exists");
          }
  
          // Create a new user
          const hashedPassword = await hashPassword(password);
          const newAdmin = await adminModel.create({
            name,
            lastname,
            email,
            phone,
            password: hashedPassword,
          });
  
         
        }
     catch (error) {
      console.log(`Error in API: ${error}`);
      res.status(500).send("Internal server error");
    }
  
  };