import { loginService } from './authService.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const  user = await loginService(email, password);

    return res.status(200).json({
      status: 'success',
      message: 'Login successful',
      user
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
