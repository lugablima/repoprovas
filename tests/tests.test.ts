import supertest from "supertest";
// import { faker } from "@faker-js/faker";
import app from "../src/app";
import prisma from "../src/config/database";
import testFactory from "./factories/testFactory";
import tokenFactory from "./factories/tokenFactory";
import { TestPayload, TestData } from "../src/types/testsTypes";

const agent = supertest(app);

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "tests" RESTART IDENTITY`;
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe("POST /tests", () => {
	it("Should answer with status 201 when payload informations are valid", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		const { id: testId } = result.body as { id: number };

		const testCreated: TestData | null = await prisma.test.findUnique({ where: { id: testId } });

		expect(result.status).toBe(201);
		expect(testCreated).not.toBeNull();
	});
});
