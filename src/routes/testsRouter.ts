import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import testSchema from "../schemas/testsSchema";
import * as testsController from "../controllers/testsController";

const testsRouter: Router = Router();

testsRouter.post("/tests", validateSchema(testSchema), testsController.create);
testsRouter.get("/tests/disciplines", testsController.getAllTestsByDisciplines);
testsRouter.get("/tests/teachers", testsController.getAllTestsByTeachers);

export default testsRouter;
