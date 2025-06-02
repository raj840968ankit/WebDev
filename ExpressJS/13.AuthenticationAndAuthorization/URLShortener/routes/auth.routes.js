import { Router } from "express";
import * as authController from '../controllers/auth.controller.js'

const router = Router()

router.route('/auth/register').get(authController.getRegisterPage).post(authController.postRegister)

router.route('/auth/login').get(authController.getLoginPage).post(authController.postLogin)

export const authRouter = router

