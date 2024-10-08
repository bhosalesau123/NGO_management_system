import jwt from "jsonwebtoken";
import User from "../Model/userModel.js"
import { hashPassword, comparePassword } from "../../Helper/Hash.js"; 

import dotenv from "dotenv";

dotenv.config();


// login
export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("user not found");
    }
    // check if password is correct
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = await jwt.sign({ id:user._id, role:user.role}, process.env.JWT_SECRET, {
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
  
    const { name, lastname,email, phone,password,role} = req.body;
   let  image = req.file ? req.file.path : null;

    
        // Validation
        if (!name) return res.status(400).send("Name is required");
        if (!lastname) return res.status(400).send("Lastname is required");
        if (!email) return res.status(400).send("Email is required");
        if (!phone) return res.status(400).send("Phone is required");
        if (!password) return res.status(400).send("Password is required");
        if (!role) return res.status(400).send("role is required");


      
        // Create a new user
        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({
          name,
          lastname,
          email,
          phone,
          image,
          password: hashedPassword,
          role
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

// controllers/userController.js



 export const getUserProfile = async (req, res) => {
  try {
    // Find user by ID (assuming req.user.id contains the authenticated user ID)
    const user = await User.findById(req.user.id).select('-password'); // Exclude password in the response

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send user details (excluding the password)
    res.json({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};


export const userUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname, email, phone, password } = req.body;

    const user = await User.findById(id);
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

    const user = await User.findById(id);
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
