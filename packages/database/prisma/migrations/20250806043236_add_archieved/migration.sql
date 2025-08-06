/*
  Warnings:

  - Added the required column `archieved` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Document" ADD COLUMN     "archieved" BOOLEAN NOT NULL;
