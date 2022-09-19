import { TeacherDiscipline } from "@prisma/client";
import prisma from "../config/database";

// eslint-disable-next-line import/prefer-default-export
export async function findByTeacherIdAndDisciplineId(
	teacherId: number,
	disciplineId: number
): Promise<TeacherDiscipline | null> {
	const result: TeacherDiscipline | null = await prisma.teacherDiscipline.findFirst({
		where: { teacherId, disciplineId },
	});

	return result;
}
