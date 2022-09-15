import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";
import { UserId } from "../types/authTypes";

dotenv.config();

export default function validateToken(req: Request, res: Response, next: NextFunction) {
	const authorization: string | undefined = req.header("Authorization");

	if (!authorization || !authorization.includes("Bearer ")) {
		throw errorHandlingUtils.badRequest("The token was not sent!");
	}

	const token: string = authorization.replace("Bearer ", "").trim();

	if (!token) {
		throw errorHandlingUtils.badRequest("The token was not sent!");
	}

	const { JWT_SECRET } = process.env as { JWT_SECRET: string | undefined };

	if (!JWT_SECRET) {
		throw errorHandlingUtils.internalServer("JWT_SECRET environment variable not provided!");
	}

	const { userId } = jwt.verify(token, JWT_SECRET) as UserId;

	res.locals.userId = userId;

	next();
}
