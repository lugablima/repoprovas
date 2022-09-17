import supertest from "supertest";
import { faker } from "@faker-js/faker";
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
	it("Should answer with status 201 when payload information are valid", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		const { id: testId } = result.body as { id: number };

		const testCreated: TestData | null = await prisma.test.findUnique({ where: { id: testId } });

		expect(result.status).toBe(201);
		expect(result.body).toBeInstanceOf(Object);
		expect(testCreated).not.toBeNull();
	});

	it("Should answer with status 422 when payload information is in wrong format", async () => {
		const token: string = await tokenFactory();

		const test: Object = {};

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		expect(result.status).toBe(422);
	});

	it("Should answer with status 400 when Authorization header is not sent", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ AnotherHeader: `Bearer ${token}`, Accept: "application/json" });

		expect(result.status).toBe(400);
	});

	it("Should answer with status 400 when Bearer authentication type is not sent", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		const result = await agent.post("/tests").send(test).set({ Authorization: token, Accept: "application/json" });

		expect(result.status).toBe(400);
	});

	it("Should answer with status 400 when token is not sent", async () => {
		const test: TestPayload = testFactory();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: "Bearer ", Accept: "application/json" });

		expect(result.status).toBe(400);
	});

	it("Should answer with status 401 when token is invalid", async () => {
		const token: string = "AnyToken";
		const test: TestPayload = testFactory();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		expect(result.status).toBe(401);
	});

	it("Should answer with status 404 when category is not found", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		test.categoryName = faker.lorem.word();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		expect(result.status).toBe(404);
	});

	it("Should answer with status 404 when discipline is not found", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		test.disciplineName = faker.lorem.word();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		expect(result.status).toBe(404);
	});

	it("Should answer with status 404 when teacher is not found", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		test.teacherName = faker.name.fullName();

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		expect(result.status).toBe(404);
	});

	it("Should answer with status 404 when teacher is not registered in that discipline", async () => {
		const token: string = await tokenFactory();

		const test: TestPayload = testFactory();

		test.disciplineName = "Planejamento";

		const result = await agent
			.post("/tests")
			.send(test)
			.set({ Authorization: `Bearer ${token}`, Accept: "application/json" });

		expect(result.status).toBe(404);
	});
});
