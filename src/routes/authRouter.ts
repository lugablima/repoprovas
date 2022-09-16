import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import { signUpSchema, signInSchema } from "../schemas/authSchema";
import * as authController from "../controllers/authController";

const authRouter: Router = Router();

authRouter.post("/signup", validateSchema(signUpSchema), authController.signUp);
authRouter.post("/signin", validateSchema(signInSchema), authController.signIn);

export default authRouter;
