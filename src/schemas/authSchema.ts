import joi from "joi";
import { SignUpUser, InsertUser } from "../types/authTypes";

export const signUpSchema = joi.object<SignUpUser>({
	email: joi.string().email().required(),
	password: joi.string().trim().required(),
	repeatPassword: joi.string().trim().valid(joi.ref("password")).required(),
});

export const signInSchema = joi.object<InsertUser>({
	email: joi.string().email().required(),
	password: joi.string().trim().required(),
});
