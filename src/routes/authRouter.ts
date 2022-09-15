import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import userSchema from "../schemas/authSchema";
import * as authController from "../controllers/authController";

const authRouter: Router = Router();

authRouter.post("/signup", validateSchema(userSchema), authController.signUp);
authRouter.post("/signin", validateSchema(userSchema), authController.signIn);

export default authRouter;
