import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/config/database";
import testFactory from "./factories/testFactory";
import tokenFactory from "./factories/tokenFactory";
import { TestPayload } from "../src/types/testsTypes";

const agent = supertest(app);

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "tests" RESTART IDENTITY`;
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe("GET /teachers", () => {
	it("Should answer with status 200 and in array format", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}` });

		const result = await agent
			.get("/teachers")
			.send()
			.set({ Authorization: `Bearer ${token}` });

		expect(result.status).toBe(200);
		expect(result.body).toBeInstanceOf(Array);
	});
});
