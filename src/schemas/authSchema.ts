import joi, { ObjectSchema } from "joi";

const userSchema: ObjectSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(10).trim().required(),
});

export default userSchema;
