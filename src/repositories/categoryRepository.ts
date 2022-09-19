import { Category } from "@prisma/client";
import prisma from "../config/database";

// eslint-disable-next-line import/prefer-default-export
export async function findByName(name: string): Promise<Category | null> {
	const result: Category | null = await prisma.category.findUnique({ where: { name } });

	return result;
}
