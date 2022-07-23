import express from 'express';
import { userAuthLoginController, userAuthRegisterController } from './userAuth.controllers';

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/register', userAuthRegisterController)

userRouter.post('/login', userAuthLoginController)

export {
  userRouter
}