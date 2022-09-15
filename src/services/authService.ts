import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TUser, SignUpSchema, InsertUser, UserToken } from "../types/authTypes";
import * as authRepository from "../repositories/authRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";

async function findUserByEmail(email: string) {
	const user: TUser | null = await authRepository.findByEmail(email);

	return user;
}

function encryptPassword(password: string): string {
	const SALT: number = 10;
	const hashedPassword: string = bcrypt.hashSync(password, SALT);

	return hashedPassword;
}

function validatePassword(password: string, encryptedPassword: string) {
	if (!bcrypt.compareSync(password, encryptedPassword)) {
		throw errorHandlingUtils.unauthorized("Invalid email or password!");
	}
}

function generateToken(userId: number): string {
	const { JWT_SECRET } = process.env as { JWT_SECRET: string | undefined };

	if (!JWT_SECRET) {
		throw errorHandlingUtils.internalServer("JWT_SECRET environment variable not provided!");
	}

	const TIME_15_DAYS_IN_SECONDS: number = 60 * 60 * 24 * 15;

	const token: string = jwt.sign({ userId }, JWT_SECRET, { expiresIn: TIME_15_DAYS_IN_SECONDS });

	return token;
}

export async function signUp(userData: SignUpSchema) {
	const { email, password } = userData;

	const user: TUser | null = await findUserByEmail(email);

	if (user) {
		throw errorHandlingUtils.conflict("This email is already registered!");
	}

	const encryptedPassword: string = encryptPassword(password);

	await authRepository.insert({ email, password: encryptedPassword });
}

export async function signIn(userData: InsertUser) {
	const { email, password } = userData;

	const user: TUser | null = await findUserByEmail(email);

	if (!user) {
		throw errorHandlingUtils.unauthorized("Invalid email or password!");
	}

	validatePassword(password, user.password);

	const token: UserToken = {
		token: generateToken(user.id),
	};

	return token;
}
