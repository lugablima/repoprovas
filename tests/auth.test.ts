import supertest from "supertest";
import { faker } from "@faker-js/faker";
import app from "../src/app";
import { userFactory } from "./factories/userFactory";
import { SignUpUser, TUser, InsertUserOptional } from "../src/types/authTypes";
import prisma from "../src/config/database";

const agent = supertest(app);

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe("POST /signup", () => {
	it("Should answer with status 201 when credentials are valid", async () => {
		const user: SignUpUser = userFactory();

		const result = await agent.post("/signup").send(user);

		const userCreated: TUser | null = await prisma.user.findUnique({ where: { email: user.email } });

		expect(result.status).toBe(201);
		expect(userCreated).not.toBeNull();
	});

	it("Should answer with status 422 when credentials are in invalid format", async () => {
		const user: InsertUserOptional = userFactory();

		delete user.email;

		const result = await agent.post("/signup").send(user);

		expect(result.status).toBe(422);
	});

	it("Should answer with status 409 when email already exists", async () => {
		const user: SignUpUser = userFactory();

		await agent.post("/signup").send(user);
		const result = await agent.post("/signup").send(user);

		expect(result.status).toBe(409);
	});
});

describe("POST /signin", () => {
	it("Should answer with status 200 and a body in the form of an object when credentials are valid", async () => {
		const user: InsertUserOptional = userFactory();

		await agent.post("/signup").send(user);

		delete user.repeatPassword;

		const result = await agent.post("/signin").send(user);

		expect(result.status).toBe(200);
		expect(result.body).toBeInstanceOf(Object);
		expect(result.body.token).not.toBeUndefined();
	});

	it("Should answer with status 422 when credentials are in invalid format", async () => {
		const user: InsertUserOptional = userFactory();

		delete user.email;

		const result = await agent.post("/signin").send(user);

		expect(result.status).toBe(422);
	});

	it("Should answer with status 401 when email is invalid", async () => {
		const user: InsertUserOptional = userFactory();

		await agent.post("/signup").send(user);

		delete user.repeatPassword;
		user.email = faker.internet.email();

		const result = await agent.post("/signin").send(user);

		expect(result.status).toBe(401);
	});

	it("Should answer with status 401 when password is invalid", async () => {
		const user: InsertUserOptional = userFactory();

		await agent.post("/signup").send(user);

		delete user.repeatPassword;
		user.password = faker.internet.password();

		const result = await agent.post("/signin").send(user);

		expect(result.status).toBe(401);
	});

	it("Should answer with status 401 when email and password are invalid", async () => {
		const user: InsertUserOptional = userFactory();
		delete user.repeatPassword;

		const result = await agent.post("/signin").send(user);

		expect(result.status).toBe(401);
	});
});
