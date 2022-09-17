import supertest from "supertest";
import app from "../../src/app";
import userFactory from "./userFactory";
import { InsertUserOptional, UserToken } from "../../src/types/authTypes";

export default async function tokenFactory() {
	const user: InsertUserOptional = userFactory();

	await supertest(app).post("/signup").send(user);

	delete user.repeatPassword;
	const result = await supertest(app).post("/signin").send(user);

	const { token }: UserToken = result.body;

	return token;
}
