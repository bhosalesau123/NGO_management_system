import jwt from "jsonwebtoken";
import ngoModel from "../Model/ngoModel.js"
import { hashPassword, comparePassword } from "../../Helper/Hash.js"; 


// login
export const ngoLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const ngo = await ngoModel.findOne({ email });
    if (!ngo) {
      return res.status(404).send("ngo not sound" )                                                                                                                  not found");
    }
    // check if password is correct
    const isMatch = await comparePassword(password, ngo.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: ngo._id ,pass:ngo.password }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).send({
      status: "succes",
      message: "ngo loged in successfully",
      ngo,
      token
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
export const ngoRegisterController = async (req, res) => {
  try {
    const { name, regNumber,email, phone,password,address,description,website} = req.body;

    
        // Validation
        if (!name) return res.status(400).send("Name is required");
        if (!regNumber) return res.status(400).send("registration number is required");
        if (!email) return res.status(400).send("Email is required");
        if (!phone) return res.status(400).send("Phone is required");
        if (!password) return res.status(400).send("Password is required");
        if (!address) return res.status(400).send("address is required");
        if (!description) return res.status(400).send("descriptionis required");
        if (!website) return res.status(400).send("website is required");


       

        // Create a new user
        const hashedPassword = await hashPassword(password);
        const newNgo = await ngoModel.create({
         
          name, regNumber,email, phone,password: hashedPassword,address,description,website
        });


        res.status(201).send({
          status: "success",
          message: "Ngo registered successfully",
          ngo: newNgo,
          token
        });
      }
   catch (error) {
    console.log(`Error in API: ${error}`);
    res.status(500).send("Internal server error");
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
