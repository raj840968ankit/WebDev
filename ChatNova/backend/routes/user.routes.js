import { Router } from "express";
import * as userController from '../controllers/user.controller.js'
import { body } from "express-validator";
import { authUser } from "../middleware/auth.middleware.js";

const router = Router()

router.get('/' , (req, res) => {
   return res.send('hello')
})

router.post('/register', [   
    body('email').isEmail().withMessage('Invalid email'),    //!if there will be errors, they will be caught in the controller
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.createUserController)  //create user

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
], userController.loginUserController)  //login user

router.get('/profile', authUser, userController.getUserProfileController)  //get user profile

export const userRoutes = router

