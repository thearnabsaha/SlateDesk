-- DropForeignKey
ALTER TABLE "public"."Document" DROP CONSTRAINT "Document_documentId_fkey";

-- AlterTable
ALTER TABLE "public"."Document" ALTER COLUMN "documentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "public"."Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
