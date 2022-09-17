import { faker } from "@faker-js/faker";
import { SignUpUser } from "../../src/types/authTypes";

export default function userFactory() {
	const password: string = faker.internet.password();

	const user: SignUpUser = {
		email: faker.internet.email(),
		password,
		repeatPassword: password,
	};

	return user;
}
