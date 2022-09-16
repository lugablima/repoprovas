import { User } from "@prisma/client";

export type TUser = User;

export type InsertUser = Omit<User, "id">;

export type SignUpUser = InsertUser & { repeatPassword: string };

export type InsertUserOptional = Partial<SignUpUser>;

export interface UserToken {
	token: string;
}

export interface UserId {
	userId: number;
}
