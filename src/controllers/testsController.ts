import { Request, Response } from "express";
import { TestPayload } from "../types/testsTypes";
import * as testsService from "../services/testsService";

// eslint-disable-next-line import/prefer-default-export
export async function create(req: Request, res: Response) {
	const test: TestPayload = req.body;

	await testsService.create(test);

	res.status(201).send("Test created successfully!");
}
