import { Request, Response } from "express";
import { InsertUser, UserToken } from "../types/authTypes";
import * as authService from "../services/authService";

export async function signUp(req: Request, res: Response) {
	const userData: InsertUser = req.body;

	await authService.signUp(userData);

	res.status(201).send("Account created successfully!");
}

export async function signIn(req: Request, res: Response) {
	const userData: InsertUser = req.body;

	const token: UserToken = await authService.signIn(userData);

	res.status(200).send(token);
}
