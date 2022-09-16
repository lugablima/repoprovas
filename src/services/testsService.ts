import { TestPayload } from "../types/testsTypes";
import * as categoryRepository from "../repositories/categoryRepository";
import { CategoryData } from "../types/categoryTypes";
import * as errorHandlingUtils from "../utils/errorHandlingUtils";

async function findCategoryByName(categoryName: string) {
	const user: CategoryData | null = await categoryRepository.findByName(categoryName);

	return user;
}

// eslint-disable-next-line import/prefer-default-export
export async function create(testData: TestPayload) {
	const { name, pdfUrl, categoryName, disciplineName, teacherName } = testData;

	const category: CategoryData | null = await findCategoryByName(categoryName);

	if (!category) {
		throw errorHandlingUtils.notFound("Category not found!");
	}

	// await testsRepository.insert({ email, password: encryptedPassword });
}
