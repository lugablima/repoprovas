import { Test } from "@prisma/client";

export interface TestPayload {
	name: string;
	pdfUrl: string;
	categoryName: string;
	disciplineName: string;
	teacherName: string;
}

export type InsertTest = Omit<Test, "id">;
