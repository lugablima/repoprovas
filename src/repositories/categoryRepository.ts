import { CategoryData } from "../types/categoryTypes";
import prisma from "../config/database";

// eslint-disable-next-line import/prefer-default-export
export async function findByName(name: string): Promise<CategoryData | null> {
	const result: CategoryData | null = await prisma.category.findUnique({ where: { name } });

	return result;
}
