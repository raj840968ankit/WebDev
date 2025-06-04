import { Router } from "express";
import * as authController from '../controllers/auth.controller.js'

const router = Router()

router.route('/auth/register').get(authController.getRegisterPage).post(authController.postRegister)

router.route('/auth/login').get(authController.getLoginPage).post(authController.postLogin)

//created a dashboard using json-web-token
router.route('/me').get(authController.getMe)

//clearing cookie here after logout
router.route('/auth/logout').get(authController.getLogoutUser)



export const authRouter = router

