import express from 'express';
import { registerController ,loginController,testController} from "../controllers/authController.js";
const router= express.Router();

import { isAdmin } from './../middlewares/authMiddlewares.js';
import { requireSignIn } from './../middlewares/authMiddlewares.js';
//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || POST
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);


export default router;