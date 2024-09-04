// login
export const loginController = async (req, res) => {
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
      res.status(200).send({
        status: "succes",
        message: "user loged in successfully",
        admin,
      });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
  export const registerController = async (req, res) => {
    try {
      const { name, lastname,email, phone,password} = req.body;
  
      
          // Validation
          if (!name) return res.status(400).send("Name is required");
          if (!lastname) return res.status(400).send("Lastname is required");
          if (!email) return res.status(400).send("Email is required");
          if (!phone) return res.status(400).send("Phone is required");
          if (!password) return res.status(400).send("Password is required");
  
          // Existing user validation
          const existingAdmin = await userModel.findOne({ email });
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
            image,
          });
  
          const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: "3h" });
  
          res.status(201).send({
            status: "success",
            message: "Admin registered successfully",
            user: newUser,
            token
          });
        }
     catch (error) {
      console.log(`Error in API: ${error}`);
      res.status(500).send("Internal server error");
    }
  
  };