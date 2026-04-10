import { User } from '../models/user.model.js';

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
  const { nombre, correo, password } = req.body;
  try {
    const newUser = new User({ nombre, correo, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un usuario
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;
  try {
    const updated = await User.findByIdAndUpdate(
      id,
      { nombre, correo },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};