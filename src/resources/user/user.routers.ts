import express from 'express';
import { userAuthRegisterController } from './userAuth.controllers';

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/register', userAuthRegisterController)

export {
  userRouter
}