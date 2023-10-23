import express from 'express'
import {registerController,loginController,forgotPasswordController} from '../controllers/authController.js'
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js'

const router =express.Router()

router.post('/register',registerController)

router.post('/login',loginController)


//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


export default router