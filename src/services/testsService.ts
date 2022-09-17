import { Category, Discipline, Teacher, TeacherDiscipline } from "@prisma/client";
import { TestPayload, TestData } from "../types/testsTypes";
import * as categoryRepository from "../repositories/categoryRepository";
import * as disciplineRepository from "../repositories/disciplineRepository";
import * as teacherRepository from "../repositories/teacherRepository";
import * as teacherDisciplineRepository from "../repositories/teacherDisciplineRepository";
import * as testsRepository from "../repositories/testsRepository";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";

async function findCategoryByName(categoryName: string) {
	const user: Category | null = await categoryRepository.findByName(categoryName);

	return user;
}

async function findTeacherDisciplineOrFail(disciplineName: string, teacherName: string) {
	const discipline: Discipline | null = await disciplineRepository.findByName(disciplineName);

	if (!discipline) {
		throw errorHandlingUtils.notFound("Discipline not found!");
	}

	const teacher: Teacher | null = await teacherRepository.findByName(teacherName);

	if (!teacher) {
		throw errorHandlingUtils.notFound("Teacher not found!");
	}

	const teacherDiscipline: TeacherDiscipline | null =
		await teacherDisciplineRepository.findByTeacherIdAndDisciplineId(teacher.id, discipline.id);

	if (!teacherDiscipline) {
		throw errorHandlingUtils.notFound("This teacher is not registered in this discipline!");
	}

	return teacherDiscipline;
}

// eslint-disable-next-line import/prefer-default-export
export async function create(testData: TestPayload) {
	const { name, pdfUrl, categoryName, disciplineName, teacherName } = testData;

	const category: Category | null = await findCategoryByName(categoryName);

	if (!category) {
		throw errorHandlingUtils.notFound("Category not found!");
	}

	const teacherDiscipline: TeacherDiscipline = await findTeacherDisciplineOrFail(disciplineName, teacherName);

	const test: TestData = await testsRepository.insert({
		name,
		pdfUrl,
		categoryId: category.id,
		teacherDisciplineId: teacherDiscipline.id,
	});

	return test;
}
