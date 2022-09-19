-- CreateTable
CREATE TABLE "_CategoryToDiscipline" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToTeacher" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DisciplineToTeacher" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToDiscipline_AB_unique" ON "_CategoryToDiscipline"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToDiscipline_B_index" ON "_CategoryToDiscipline"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToTeacher_AB_unique" ON "_CategoryToTeacher"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToTeacher_B_index" ON "_CategoryToTeacher"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplineToTeacher_AB_unique" ON "_DisciplineToTeacher"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplineToTeacher_B_index" ON "_DisciplineToTeacher"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToDiscipline" ADD CONSTRAINT "_CategoryToDiscipline_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToDiscipline" ADD CONSTRAINT "_CategoryToDiscipline_B_fkey" FOREIGN KEY ("B") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTeacher" ADD CONSTRAINT "_CategoryToTeacher_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTeacher" ADD CONSTRAINT "_CategoryToTeacher_B_fkey" FOREIGN KEY ("B") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplineToTeacher" ADD CONSTRAINT "_DisciplineToTeacher_A_fkey" FOREIGN KEY ("A") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplineToTeacher" ADD CONSTRAINT "_DisciplineToTeacher_B_fkey" FOREIGN KEY ("B") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
