-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "taskName" TEXT NOT NULL,
    "taskstatus" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
