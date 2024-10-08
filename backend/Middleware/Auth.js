import JWT from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const requireSignIn = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Authorization token is required" });
    }

    const decoded = JWT.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded user information to the request object
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};