import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: 6
  },
  creadoEn: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', userSchema);