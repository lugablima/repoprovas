import joi from "joi";
import { TestPayload } from "../types/testsTypes";

const testSchema = joi.object<TestPayload>({
	name: joi.string().trim().required(),
	pdfUrl: joi.string().uri().required(),
	categoryName: joi.string().trim().required(),
	disciplineName: joi.string().trim().required(),
	teacherName: joi.string().trim().required(),
});

export default testSchema;
