import { Router } from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/user.controller.js';

const router = Router();

//obetener todos los usuarios
router.get('/', getUsers);

router.get('/:id', getUserById);

//Crear un nuevo usuario
router.post('/', createUser);

//Actualizar un usuarioo por ID
router.put('/:id', updateUser);

//Eliminar un usuarioo por ID
router.delete('/:id', deleteUser);

export default router;
