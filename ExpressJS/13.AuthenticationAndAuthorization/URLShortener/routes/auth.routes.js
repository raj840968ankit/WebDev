import { Router } from "express";
import * as authController from '../controllers/auth.controller.js'

const router = Router()

router.route('/auth/register').get(authController.getRegisterPage).post(authController.postRegister)

router.route('/auth/login').get(authController.getLoginPage).post(authController.postLogin)

//created a dashboard using json-web-token
router.route('/me').get(authController.getMe)

//clearing cookie here after logout
router.route('/auth/logout').get(authController.getLogoutUser)

router.route('/auth/profile').get(authController.getUserProfilePage)

router.route('/verify-email').get(authController.getVerifyEmailPage)

router.route('/resend-verification-link').post(authController.resendVerificationLink)

router.route('/verify-email-token').get(authController.verifyEmailToken)

router.route('/edit-profile').get(authController.getEditProfilePage).post(authController.postEditProfile)

router.route('/change-password').get(authController.getChangePasswordPage).post(authController.postChangePassword)

router.route('/forget-password').get(authController.getForgetPasswordPage).post(authController.postForgetPassword)

router.route('/reset-password/:token').get(authController.resetPasswordTokenPage).post(authController.postResetPasswordToken)

router.route('/google').get(authController.getGoogleLoginPage)

router.route('/google/callback').get(authController.getGoogleLoginCallback)

export const authRouter = router

