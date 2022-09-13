import { Request, Response, NextFunction } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandlerMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
	if (error.name === "bad_request") {
		return res.status(400).send(error.message);
	}

	if (error.name === "unauthorized" || error.name === "JsonWebTokenError") {
		return res.status(401).send(error.message);
	}

	if (error.name === "not_found") {
		return res.status(404).send(error.message);
	}

	if (error.name === "conflict") {
		return res.status(409).send(error.message);
	}

	return res.status(500).send(error);
}
