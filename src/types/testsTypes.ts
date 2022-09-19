import { Test, Teacher } from "@prisma/client";

export type TestData = Test;

export interface TestPayload {
	name: string;
	pdfUrl: string;
	categoryName: string;
	disciplineName: string;
	teacherName: string;
}

export type InsertTest = Omit<Test, "id">;

export type TestsGroupedByDiscipline = {
	disciplines: {
		categories: {
			tests: (
				| {
						teacher: Teacher;
						name: string;
						pdfUrl: string;
						id: number;
				  }
				| undefined
			)[];
			name: string;
			id: number;
		}[];
		name: string;
		id: number;
	}[];
	id: number;
	number: number;
}[];

export type TestsGroupedByTeacher = {
	id: number;
	name: string;
	categories: {
		tests: (
			| {
					discipline: {
						name: string;
						id: number;
					};
					name: string;
					pdfUrl: string;
					id: number;
			  }
			| undefined
		)[];
		name: string;
		id: number;
	}[];
}[];
