import { Schema, ValidationResult } from "joi";
import { Request, Response, NextFunction } from "express";

export default function validateSchema(schema: Schema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const result: ValidationResult = schema.validate(req.body, { abortEarly: false });

		if (result.error) { 
			return res.status(422).send(result.error.details.map((err) => ({ message: err.message })));
		}

		next();
	};
}
