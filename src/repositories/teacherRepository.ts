import { Teacher } from "@prisma/client";
import prisma from "../config/database";

// eslint-disable-next-line import/prefer-default-export
export async function findByName(name: string): Promise<Teacher | null> {
	const result: Teacher | null = await prisma.teacher.findUnique({ where: { name } });

	return result;
}
