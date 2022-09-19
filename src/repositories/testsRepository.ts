/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-shadow */
import prisma from "../config/database";
import { InsertTest, TestData } from "../types/testsTypes";

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

	// categories: {
	// 	select: {
	// 		id: true,
	// 		name: true,
	// 	},
	// 	orderBy: { name: "asc" },
	// },

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

	const result = terms.map(({ disciplines, ...rest }) => ({
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

	// const tests = await prisma.test.findMany({
	// 	select: {
	// 		id: true,
	// 		name: true,
	// 		pdfUrl: true,
	// 		categoryId: true,
	// 		teacherDiscipline: { select: { disciplineId: true, teacher: true } },
	// 	},
	// 	orderBy: { teacherDiscipline: { teacher: { name: "asc" } } },
	// });

	// const filteredResult = result.map(({ disciplines, ...rest }) => ({
	// 	...rest,
	// 	disciplines: disciplines.map(({ id, categories, ...rest }) => ({
	// 		...rest,
	// 		categories: categories
	// 			.map(({ tests, ...rest }) => ({
	// 				...rest,
	// 				tests: tests.filter(({ teacherDiscipline: { disciplineId, teacher }, ...rest }) => {
	// 					if (disciplineId === id) {
	// 						return { ...rest, teacher };
	// 					}
	// 				}),
	// 			}))
	// 			.filter(({ tests }) => tests.length > 0),
	// 	})),
	// }));

	return result;
}

// export async function findAllTestsGroupedByTerm() {
// 	const terms = await prisma.term.findMany({
// 		include: {
// 			disciplines: {
// 				select: {
// 					id: true,
// 					name: true,
// 					categories: {
// 						select: {
// 							id: true,
// 							name: true,
// 							tests: {
// 								select: {
// 									id: true,
// 									name: true,
// 									pdfUrl: true,
// 									teacherDiscipline: {
// 										select: {
// 											disciplineId: true,
// 											teacher: true,
// 										},
// 									},
// 								},
// 								orderBy: {
// 									teacherDiscipline: { teacher: { name: "asc" } },
// 								},
// 							},
// 						},
// 						orderBy: { name: "asc" },
// 					},
// 				},
// 				orderBy: { name: "asc" },
// 			},
// 		},
// 		orderBy: { number: "asc" },
// 	});

// 	return terms;

// const teachersDisciplines = await prisma.teacherDiscipline.findMany({
// 	select: {
// 		id: true,
// 		teacherId: true,
// 		disciplineId: true,
// 		teacher: {
// 			select: {
// 				id: true,
// 				name: true,
// 			},
// 		},
// 		tests: {
// 			select: {
// 				id: true,
// 				name: true,
// 				pdfUrl: true,
// 				categoryId: true,
// 				category: {
// 					select: {
// 						id: true,
// 						name: true,
// 					},
// 				},
// 				teacherDisciplineId: true,
// 			},
// 		},
// 	},
// });

// const categories = await prisma.category.findMany({
// 	select: {
// 		id: true,
// 		name: true,
// 		tests: {
// 			select: {
// 				id: true,
// 				name: true,
// 				pdfUrl: true,
// 				categoryId: true,
// 				teacherDiscipline: {
// 					select: {
// 						id: true,
// 						teacherId: true,
// 						disciplineId: true,
// 						teacher: {
// 							select: {
// 								id: true,
// 								name: true,
// 							},
// 						},
// 					},
// 				},
// 			},
// 		},
// 	},
// });
// }
