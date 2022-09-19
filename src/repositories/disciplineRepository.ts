import { Discipline } from "@prisma/client";
import prisma from "../config/database";

// eslint-disable-next-line import/prefer-default-export
export async function findByName(name: string): Promise<Discipline | null> {
	const result: Discipline | null = await prisma.discipline.findUnique({ where: { name } });

	return result;
}
