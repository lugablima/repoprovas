// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from "@faker-js/faker";
import { SignUpUser } from "../../src/types/authTypes";

export function userFactory() {
	const password: string = faker.internet.password();

	const user: SignUpUser = {
		email: faker.internet.email(),
		password,
		repeatPassword: password,
	};

	return user;
}

export async function tokenFactory() {
	const password: string = faker.internet.password();

	const user: SignUpUser = {
		email: faker.internet.email(),
		password,
		repeatPassword: password,
	};

	return user;
}
