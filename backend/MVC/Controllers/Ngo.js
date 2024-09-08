
import jwt from "jsonwebtoken";
import ngoModel from "../Model/ngoModel.js";
import { hashPassword, comparePassword } from "../../Helper/Hash.js";
import dotenv from "dotenv";
import upload from "../../Middleware/Multer.js"

dotenv.config();

// login
export const ngoLoginController = async (req, res) => {
  try {
  
    const { email, password } = req.body;

    // Check if user exists
    const ngo = await ngoModel.findOne({ email });
    if (!ngo) {
      return res.status(404).send("ngo not found");
    }

    // Check if password is correct
    const isMatch = await comparePassword(password, ngo.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // Get JWT_SECRET from environment variables
    const JWT_SECRET = process.env.JWT_SECRET;
    
    // Generate JWT token
    const token = jwt.sign({ id: ngo._id, pass: ngo.password }, JWT_SECRET, { expiresIn: "1h" });

    // Successful response
    res.status(200).send({
      status: "success",  // Fixed typo
      message: "ngo logged in successfully",
      ngo,
      token,
    });
  } catch (error) {
    console.error(error);  // Added for debugging
    res.status(500).send("Internal server error");
  }
};



export const getNgoController = async (req, res) => {
  try {
    const getngo = await ngoModel.find({});
    if (!getngo || getngo.length === 0) {
      return res.status(404).send('No ngo found');
    }
    res.status(200).send({
      status: 'success',
      message: 'Get all ngo details successfully',
      getngo,
    });
  } catch (error) {
    console.log(`Error in API: ${error}`);
    res.status(500).send('Internal server error');
  }
};


export const ngoRegisterController = async (req, res) => {
 try {

  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send(err);
    } else {
      const { name, regNumber,email, password,address,description,website} = req.body;
      let image = req.file ? req.file.path : null;

  
    // Validation
    if (!name) return res.status(400).send("Name is required");
    if (!regNumber) return res.status(400).send("Registration number is required");
    if (!email) return res.status(400).send("Email is required");
    if (!password) return res.status(400).send("Password is required");
    if (!address) return res.status(400).send("Address is required");
    if (!description) return res.status(400).send("Description is required");
    if (!website) return res.status(400).send("Website is required");

    // Create a new NGO
    const hashedPassword = await hashPassword(password);
    const newNgo = await ngoModel.create({
      name,
      regNumber,
      email,
      password: hashedPassword,
      address,
      description,
      website,
      image
    });

    res.status(201).send({
      status: "success",
      message: "Ngo registered successfully",
      ngo: newNgo
    });
  }
});
  }catch (error) {
    console.error(`Error in API: ${error.message}`);
    res.status(500).send({ message: "Internal server error" });
  }
};


export const ngoUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const {  name, regNumber,email, phone,password,address,description,website } = req.body;

    const ngo = await userModel.findById(id);
    if (!ngo) {
      return res.status(404).send("User not found");
    }

    if (email && email !== ngo.email) {
      const existingNgo = await userModel.findOne({ email });
      if (existingNgo) {
        return res.status(400).send("Email already in use");
      }
    }

    if (name) ngo.name = name;
    if (regNumber) ngo.regNumber =regNumber;
    if (email) ngo.email = email;
    if (phone) ngo.phone = phone;
    if (password) ngo.password = password;
    if (address) ngo.address = address;
    if (description) ngo.description = description;
    if (website) user.website = website;
    if (password) user.password = await hashPassword(password);

    const updatedNgo = await ngo.save();

    res.status(200).send({
      status: "success",
      message: "Ngo updated successfully",
      ngo: updatedNgo,
    });
  } catch (error) {
    console.log(`Error in API: ${error}`);
    res.status(500).send("Internal server error");
  }
};

export const deleteNgoController = async (req, res) => {
  try {
    const { id } = req.params;

    const ngo = await ngoModel.findById(id);
    if (!ngo) {
      return res.status(404).send("Ngo not found");
    }

    await ngoModel.findByIdAndDelete(id);

    res.status(200).send({
      status: "success",
      message: "Ngo deleted successfully",
    });
  } catch (error) {
    console.log(`Error in API: ${error}`);
    res.status(500).send("Internal server error");
  }
};
