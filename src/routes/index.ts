import { Router } from "express";
import authRouter from "./authRouter";
import validateToken from "../middlewares/tokenValidatorMiddleware";
import testsRouter from "./testsRouter";
// import notesRouter from "./notesRouter";
// import cardsRouter from "./cardsRouter";
// import wifiRouter from "./wifiRouter";

const router: Router = Router();

router.use(authRouter);
router.use(validateToken);
router.use(testsRouter);
// router.use(notesRouter);
// router.use(cardsRouter);
// router.use(wifiRouter);

export default router;
