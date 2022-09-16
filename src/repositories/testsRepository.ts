import prisma from "../config/database";
import { InsertTest } from "../types/testsTypes";

// eslint-disable-next-line import/prefer-default-export
export async function insert(test: InsertTest) {
	await prisma.test.create({ data: test });
}
