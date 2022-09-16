import supertest from "supertest";
import app from "../src/app";
import { userFactory } from "./factories/userFactory";
import { SignUpUser, TUser, InsertUserOptional } from "../src/types/authTypes";
import prisma from "../src/config/database";

const agent = supertest(app);

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "users"`;
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

	it("Should answer with status 422 when credentials are invalid", async () => {
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
