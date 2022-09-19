import prisma from "../src/config/database";

// interface InsertDiscipline {
// 	name: string;
// 	termId: number;
// }

// interface InsertTeacherDiscipline {
// 	teacherId: number;
// 	disciplineId: number;
// }

async function main() {
	await prisma.$executeRaw`TRUNCATE TABLE terms RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE categories RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE teachers RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" RESTART IDENTITY CASCADE`;

	await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (1)`;
	await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (2)`;
	await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (3)`;
	await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (4)`;
	await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (5)`;
	await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (6)`;

	await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Projeto')`;
	await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Prática')`;
	await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Recuperação')`;

	await prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Diego Pinho')`;
	await prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Bruna Hamori')`;

	await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1)`;
	await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2)`;
	await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('React', 3)`;
	await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1)`;
	await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2)`;
	await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3)`;

	await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1)`;
	await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2)`;
	await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3)`;
	await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4)`;
	await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5)`;
	await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6)`;

	// const terms: number[] = [1, 2, 3, 4, 5, 6];
	// await Promise.all(
	// 	terms.map(async (number: number) => {
	// 		await prisma.term.upsert({
	// 			where: { number },
	// 			update: {},
	// 			create: { number },
	// 		});
	// 	})
	// );

	// const categories: string[] = ["Projeto", "Prática", "Recuperação"];
	// await Promise.all(
	// 	categories.map(async (name: string) => {
	// 		await prisma.category.upsert({
	// 			where: { name },
	// 			update: {},
	// 			create: { name },
	// 		});
	// 	})
	// );

	// const teachers: string[] = ["Diego Pinho", "Bruna Hamori"];
	// await Promise.all(
	// 	teachers.map(async (name: string) => {
	// 		await prisma.teacher.upsert({
	// 			where: { name },
	// 			update: {},
	// 			create: { name },
	// 		});
	// 	})
	// );

	// const disciplines: InsertDiscipline[] = [
	// 	{
	// 		name: "HTML e CSS",
	// 		termId: 1,
	// 	},
	// 	{
	// 		name: "JavaScript",
	// 		termId: 2,
	// 	},
	// 	{
	// 		name: "React",
	// 		termId: 3,
	// 	},
	// 	{
	// 		name: "Humildade",
	// 		termId: 1,
	// 	},
	// 	{
	// 		name: "Planejamento",
	// 		termId: 2,
	// 	},
	// 	{
	// 		name: "Autoconfiança",
	// 		termId: 3,
	// 	},
	// ];
	// await Promise.all(
	// 	disciplines.map(async (discipline: InsertDiscipline) => {
	// 		await prisma.discipline.upsert({
	// 			where: { name: discipline.name },
	// 			update: {},
	// 			create: discipline,
	// 		});
	// 	})
	// );

	// const teachersDisciplines: InsertTeacherDiscipline[] = [
	// 	{
	// 		teacherId: 1,
	// 		disciplineId: 1,
	// 	},
	// 	{
	// 		teacherId: 1,
	// 		disciplineId: 2,
	// 	},
	// 	{
	// 		teacherId: 1,
	// 		disciplineId: 3,
	// 	},
	// 	{
	// 		teacherId: 2,
	// 		disciplineId: 4,
	// 	},
	// 	{
	// 		teacherId: 2,
	// 		disciplineId: 5,
	// 	},
	// 	{
	// 		teacherId: 2,
	// 		disciplineId: 6,
	// 	},
	// ];
	// await Promise.all(
	// 	teachersDisciplines.map(async (teacherDiscipline: InsertTeacherDiscipline) => {
	// 		await prisma.teacherDiscipline.create({ data: teacherDiscipline });
	// 	})
	// );
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
