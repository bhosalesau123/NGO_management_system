import jwt from "jsonwebtoken";
import userModel from "../Model/userModel.js"
import { hashPassword, comparePassword } from "../../Helper/"; 
import dotenv from "dotenv";

dotenv.config();


// login
export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send("user not found");
    }
    // check if password is correct
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = await jwt.sign({ id: adminName, role: "admin"}, process.env.JWT_SECRET, {
      expiresIn: "7d",
  });
    res.status(200).send({
      status: "succes",
      message: "user loged in successfully",
      user,
      token
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
export const userRegisterController = async (req, res) => {
  try {
    const { name, lastname,email, phone,password} = req.body;

    
        // Validation
        if (!name) return res.status(400).send("Name is required");
        if (!lastname) return res.status(400).send("Lastname is required");
        if (!email) return res.status(400).send("Email is required");
        if (!phone) return res.status(400).send("Phone is required");
        if (!password) return res.status(400).send("Password is required");

      
        // Create a new user
        const hashedPassword = await hashPassword(password);
        const newUser = await userModel.create({
          name,
          lastname,
          email,
          phone,
          password: hashedPassword,
        });


        res.status(201).send({
          status: "success",
          message: "User registered successfully",
          user: newUser,
        });
      }
   catch (error) {
    console.log(`Error in API: ${error}`);
    res.status(500).send("Internal server error");
  }

};

export const userUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname, email, phone, password } = req.body;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (email && email !== user.email) {
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).send("Email already in use");
      }
    }

    if (name) user.name = name;
    if (lastname) user.lastname = lastname;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (password) user.password = await hashPassword(password);

    const updatedUser = await user.save();

    res.status(200).send({
      status: "success",
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(`Error in API: ${error}`);
    res.status(500).send("Internal server error");
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    await userModel.findByIdAndDelete(id);

    res.status(200).send({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(`Error in API: ${error}`);
    res.status(500).send("Internal server error");
  }
};
