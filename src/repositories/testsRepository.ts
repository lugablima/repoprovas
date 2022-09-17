import prisma from "../config/database";
import { InsertTest, TestData } from "../types/testsTypes";

// eslint-disable-next-line import/prefer-default-export
export async function insert(test: InsertTest): Promise<TestData> {
	const result: TestData = await prisma.test.create({ data: test });

	return result;
}
