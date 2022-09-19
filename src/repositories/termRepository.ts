import prisma from "../config/database";

// eslint-disable-next-line import/prefer-default-export
export async function getTestsByTermId(id: number) {
	const result = await prisma.term.findUnique({
		where: { id },
		include: {
			disciplines: {
				select: {
					id: true,
					name: true,
					teachersDisciplines: {
						select: {
							teacher: {
								select: {
									name: true,
								},
							},
							tests: {
								select: {
									id: true,
									name: true,
									pdfUrl: true,
									category: {
										select: {
											name: true,
										},
									},
								},
							},
						},
					},
				},
			},
		},
	});

	return result;
}
