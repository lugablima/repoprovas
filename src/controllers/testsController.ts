import { Request, Response } from "express";
import { TestPayload, TestData } from "../types/testsTypes";
import * as testsService from "../services/testsService";

export async function create(req: Request, res: Response) {
	const test: TestPayload = req.body;

	const testCreated: TestData = await testsService.create(test);

	res.status(201).send(testCreated);
}

export async function getAllTestsByDisciplines(req: Request, res: Response) {
	const tests = await testsService.getAllTestsByDisciplines();

	res.status(200).send(tests);
}
