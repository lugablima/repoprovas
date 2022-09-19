import prisma from "../config/database";
import { InsertTest, TestData, TestsGroupedByDiscipline, TestsGroupedByTeacher } from "../types/testsTypes";

export async function insert(test: InsertTest): Promise<TestData> {
	const result: TestData = await prisma.test.create({ data: test });

	return result;
}

export async function findAllTestsGroupedByDiscipline() {
	const terms = await prisma.term.findMany({
		include: {
			disciplines: {
				select: {
					id: true,
					name: true,
				},
				orderBy: { name: "asc" },
			},
		},
		orderBy: { number: "asc" },
	});

	const categories = await prisma.category.findMany({
		include: {
			tests: {
				select: {
					id: true,
					name: true,
					pdfUrl: true,
					categoryId: true,
					teacherDiscipline: { select: { disciplineId: true, teacher: true } },
				},
				orderBy: { teacherDiscipline: { teacher: { name: "asc" } } },
			},
		},
		orderBy: { name: "asc" },
	});

	const result: TestsGroupedByDiscipline = terms.map(({ disciplines, ...rest }) => ({
		...rest,
		disciplines: disciplines.map(({ id, ...rest }) => ({
			id,
			...rest,
			categories: categories
				.map(({ id: categoriesId, tests, ...rest }) => ({
					id: categoriesId,
					...rest,
					tests: tests
						.map(({ teacherDiscipline: { disciplineId, teacher }, categoryId, ...rest }) => {
							if (disciplineId === id && categoryId === categoriesId) {
								return { ...rest, teacher };
							}
						})
						.filter((test) => test !== undefined),
				}))
				.filter(({ tests }) => tests.length > 0),
		})),
	}));

	return result;
}

export async function findAllTestsGroupedByTeacher() {
	const teachers = await prisma.teacher.findMany({
		orderBy: { name: "asc" },
	});

	const categories = await prisma.category.findMany({
		include: {
			tests: {
				select: {
					id: true,
					name: true,
					pdfUrl: true,
					categoryId: true,
					teacherDiscipline: {
						select: {
							teacherId: true,
							discipline: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
				orderBy: { teacherDiscipline: { discipline: { name: "asc" } } },
			},
		},
		orderBy: { name: "asc" },
	});

	const result: TestsGroupedByTeacher = teachers.map(({ id, name }) => ({
		id,
		name,
		categories: categories
			.map(({ id: categoriesId, tests, ...rest }) => ({
				id: categoriesId,
				...rest,
				tests: tests
					.map(({ categoryId, teacherDiscipline: { teacherId, discipline }, ...rest }) => {
						if (teacherId === id && categoryId === categoriesId) {
							return { ...rest, discipline };
						}
					})
					.filter((test) => test !== undefined),
			}))
			.filter(({ tests }) => tests.length > 0),
	}));

	return result;
}
