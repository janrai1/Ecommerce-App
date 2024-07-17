import express from 'express';
import { registerController ,loginController,testController} from "../controllers/authController.js";
const router= express.Router();

import { isAdmin,requireSignIn } from './../middlewares/authMiddlewares';

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || POST
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);


export default router;