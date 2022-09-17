import { faker } from "@faker-js/faker";
import { TestPayload } from "../../src/types/testsTypes";

export default function testFactory() {
	const categories: string[] = ["Projeto", "Prática", "Recuperação"];
	// const disciplines: string[] = ["HTML e CSS", "JavaScript", "React", "Humildade", "Planejamento", "Autoconfiança"];
	// const teachers: string[] = ["Diego Pinho", "Bruna Hamori"];
	// disciplines[faker.datatype.number({ min: 0, max: 5 })],
	// teachers[faker.datatype.number({ min: 0, max: 1 })],

	const test: TestPayload = {
		name: faker.lorem.words(),
		pdfUrl: faker.internet.url(),
		categoryName: categories[faker.datatype.number({ min: 0, max: 2 })],
		disciplineName: "React",
		teacherName: "Diego Pinho",
	};

	return test;
}
