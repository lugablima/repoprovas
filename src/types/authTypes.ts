import { User } from "@prisma/client";

export type TUser = User;

export type InsertUser = Omit<User, "id">;

export interface UserToken {
	token: string;
}

export interface UserId {
	userId: number;
}
