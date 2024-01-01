/*
  Warnings:

  - Added the required column `timer` to the `nurseNote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "nurseNote" ADD COLUMN     "timer" INTEGER NOT NULL;
