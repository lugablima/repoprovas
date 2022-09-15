import prisma from "../src/config/database";

interface InsertDiscipline {
	name: string;
	termId: number;
}

interface InsertTeacherDiscipline {
	teacherId: number;
	disciplineId: number;
}

async function main() {
	const terms: number[] = [1, 2, 3, 4, 5, 6];
	await Promise.all(
		terms.map(async (number: number) => {
			await prisma.term.upsert({
				where: { number },
				update: {},
				create: { number },
			});
		})
	);

	const categories: string[] = ["Projeto", "Prática", "Recuperação"];
	await Promise.all(
		categories.map(async (name: string) => {
			await prisma.category.upsert({
				where: { name },
				update: {},
				create: { name },
			});
		})
	);

	const teachers: string[] = ["Diego Pinho", "Bruna Hamori"];
	await Promise.all(
		teachers.map(async (name: string) => {
			await prisma.teacher.upsert({
				where: { name },
				update: {},
				create: { name },
			});
		})
	);

	const disciplines: InsertDiscipline[] = [
		{
			name: "HTML e CSS",
			termId: 1,
		},
		{
			name: "JavaScript",
			termId: 2,
		},
		{
			name: "React",
			termId: 3,
		},
		{
			name: "Humildade",
			termId: 1,
		},
		{
			name: "Planejamento",
			termId: 2,
		},
		{
			name: "Autoconfiança",
			termId: 3,
		},
	];
	await Promise.all(
		disciplines.map(async (discipline: InsertDiscipline) => {
			await prisma.discipline.upsert({
				where: { name: discipline.name },
				update: {},
				create: discipline,
			});
		})
	);

	const teachersDisciplines: InsertTeacherDiscipline[] = [
		{
			teacherId: 1,
			disciplineId: 1,
		},
		{
			teacherId: 1,
			disciplineId: 2,
		},
		{
			teacherId: 1,
			disciplineId: 3,
		},
		{
			teacherId: 2,
			disciplineId: 4,
		},
		{
			teacherId: 2,
			disciplineId: 5,
		},
		{
			teacherId: 2,
			disciplineId: 6,
		},
	];
	await Promise.all(
		teachersDisciplines.map(async (teacherDiscipline: InsertTeacherDiscipline) => {
			await prisma.teacherDiscipline.create({ data: teacherDiscipline });
		})
	);
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
