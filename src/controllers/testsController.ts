import { Request, Response } from "express";
import { TestPayload, TestData } from "../types/testsTypes";
import * as testsService from "../services/testsService";

// eslint-disable-next-line import/prefer-default-export
export async function create(req: Request, res: Response) {
	const test: TestPayload = req.body;

	const testCreated: TestData = await testsService.create(test);

	res.status(201).send(testCreated);
}
