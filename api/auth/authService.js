// authService.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

export const loginService = async (email, password) => {
  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    // Crear y devolver un sessionToken JWT
    // const sessionToken = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   process.env.JWT_SECRET,
    //   { expiresIn: '12h' }
    // );

    return  user ;
  } catch (error) {
    throw error;
  }
};
