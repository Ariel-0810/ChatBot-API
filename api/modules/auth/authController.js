import { loginService } from "./authService.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password are required"
      });
    }

    const user = await loginService(email, password);

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      user
    });
  } catch (error) {
    const statusCode =
      error.message === "User not found" ||
      error.message === "Invalid credentials"
        ? 400
        : 500;
    return res.status(statusCode).json({
      status: "error",
      message: error.message
    });
  }
};
