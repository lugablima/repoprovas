import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import testSchema from "../schemas/testsSchema";
import * as testsController from "../controllers/testsController";

const testsRouter: Router = Router();

testsRouter.post("/tests", validateSchema(testSchema), testsController.create);
testsRouter.get("/disciplines", testsController.getAllTestsByDisciplines);

export default testsRouter;
