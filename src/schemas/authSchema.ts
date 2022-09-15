import joi from "joi";
import { SignUpSchema, InsertUser } from "../types/authTypes";

export const signUpSchema = joi.object<SignUpSchema>({
	email: joi.string().email().required(),
	password: joi.string().trim().required(),
	repeatPassword: joi.string().trim().required(),
});

export const signInSchema = joi.object<InsertUser>({
	email: joi.string().email().required(),
	password: joi.string().trim().required(),
});
