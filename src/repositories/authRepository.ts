import { TUser, InsertUser } from "../types/authTypes";
import prisma from "../config/prismaClient";

export async function findByEmail(email: string): Promise<TUser | null> {
	const result: TUser | null = await prisma.user.findUnique({ where: { email } });

	return result;
}

export async function findById(id: number): Promise<TUser | null> {
	const result: TUser | null = await prisma.user.findUnique({ where: { id } });

	return result;
}

export async function insert(userData: InsertUser): Promise<TUser> {
	const result: TUser = await prisma.user.create({ data: userData });

	return result;
}
