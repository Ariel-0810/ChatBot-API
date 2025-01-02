import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String,   unique: true, match: [/^\S+@\S+\.\S+$/, 'El correo debe ser válido'], required: true },
},
{ 
  versionKey: false,
  timestamps: true 
});

export default model('User', userSchema);
