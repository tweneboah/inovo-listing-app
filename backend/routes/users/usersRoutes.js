import express from 'express';
import {
  loginUserController,
  registerUserController,
  updateUserProfileController,
  getUserProfileController,
} from '../../controllers/users/usersController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const userRoutes = express.Router();

//products
userRoutes.post('/login', loginUserController);
userRoutes.get('/profile', authMiddleware, getUserProfileController);
userRoutes.put('/profile', authMiddleware, updateUserProfileController);
userRoutes.post('/register', registerUserController);

export { userRoutes };
