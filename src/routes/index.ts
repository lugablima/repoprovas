import { Router } from "express";
import authRouter from "./authRouter";
import validateToken from "../middlewares/tokenValidatorMiddleware";
import testsRouter from "./testsRouter";

const router: Router = Router();

router.use(authRouter);
router.use(validateToken);
router.use(testsRouter);

export default router;
