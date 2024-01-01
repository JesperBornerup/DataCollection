-- CreateTable
CREATE TABLE "Participant" (
    "ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "nurseNote" (
    "ID" TEXT NOT NULL,
    "PID" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "nurseNote_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_name_key" ON "Participant"("name");
