import { Request, Response } from "express";
import { TestPayload, TestData, TestsGroupedByDiscipline, TestsGroupedByTeacher } from "../types/testsTypes";
import * as testsService from "../services/testsService";

export async function create(req: Request, res: Response) {
	const test: TestPayload = req.body;

	const testCreated: TestData = await testsService.create(test);

	res.status(201).send(testCreated);
}

export async function getAllTestsByDisciplines(req: Request, res: Response) {
	const tests: TestsGroupedByDiscipline = await testsService.getAllTestsByDisciplines();

	res.status(200).send(tests);
}

export async function getAllTestsByTeachers(req: Request, res: Response) {
	const tests: TestsGroupedByTeacher = await testsService.getAllTestsByTeachers();

	res.status(200).send(tests);
}
