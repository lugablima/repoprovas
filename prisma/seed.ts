import prisma from "../src/config/database";

async function main() {
	await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" RESTART IDENTITY CASCADE`;

	await prisma.term.createMany({
		data: [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }],
		skipDuplicates: true,
	});

	await prisma.category.createMany({
		data: [{ name: "Projeto" }, { name: "Prática" }, { name: "Recuperação" }],
		skipDuplicates: true,
	});

	await prisma.teacher.createMany({
		data: [{ name: "Diego Pinho" }, { name: "Bruna Hamori" }],
		skipDuplicates: true,
	});

	await prisma.discipline.createMany({
		data: [
			{ name: "HTML e CSS", termId: 1 },
			{ name: "JavaScript", termId: 2 },
			{ name: "React", termId: 3 },
			{ name: "Humildade", termId: 1 },
			{ name: "Planejamento", termId: 2 },
			{ name: "Autoconfiança", termId: 3 },
		],
		skipDuplicates: true,
	});

	await prisma.teacherDiscipline.createMany({
		data: [
			{ teacherId: 1, disciplineId: 1 },
			{ teacherId: 1, disciplineId: 2 },
			{ teacherId: 1, disciplineId: 3 },
			{ teacherId: 2, disciplineId: 4 },
			{ teacherId: 2, disciplineId: 5 },
			{ teacherId: 2, disciplineId: 6 },
		],
		skipDuplicates: true,
	});

	// await prisma.$executeRaw`TRUNCATE TABLE terms RESTART IDENTITY CASCADE`;
	// await prisma.$executeRaw`TRUNCATE TABLE categories RESTART IDENTITY CASCADE`;
	// await prisma.$executeRaw`TRUNCATE TABLE teachers RESTART IDENTITY CASCADE`;
	// await prisma.$executeRaw`TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE`;
	// await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" RESTART IDENTITY CASCADE`;

	// await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (1)`;
	// await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (2)`;
	// await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (3)`;
	// await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (4)`;
	// await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (5)`;
	// await prisma.$executeRaw`INSERT INTO terms ("number") VALUES (6)`;

	// await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Projeto')`;
	// await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Prática')`;
	// await prisma.$executeRaw`INSERT INTO categories ("name") VALUES ('Recuperação')`;

	// await prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Diego Pinho')`;
	// await prisma.$executeRaw`INSERT INTO teachers ("name") VALUES ('Bruna Hamori')`;

	// await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1)`;
	// await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2)`;
	// await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('React', 3)`;
	// await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1)`;
	// await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2)`;
	// await prisma.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3)`;

	// await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1)`;
	// await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2)`;
	// await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3)`;
	// await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4)`;
	// await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5)`;
	// await prisma.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6)`;
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
