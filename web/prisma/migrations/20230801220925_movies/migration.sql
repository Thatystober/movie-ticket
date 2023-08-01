/*
  Warnings:

  - You are about to drop the `MovieFormat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovieFormat" DROP CONSTRAINT "MovieFormat_formatId_formatTitleType_fkey";

-- DropForeignKey
ALTER TABLE "MovieFormat" DROP CONSTRAINT "MovieFormat_movieId_fkey";

-- DropIndex
DROP INDEX "Format_id_formatTitle_key";

-- DropIndex
DROP INDEX "Movie_id_title_key";

-- DropTable
DROP TABLE "MovieFormat";

-- CreateTable
CREATE TABLE "_FormatToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FormatToMovie_AB_unique" ON "_FormatToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_FormatToMovie_B_index" ON "_FormatToMovie"("B");

-- AddForeignKey
ALTER TABLE "_FormatToMovie" ADD CONSTRAINT "_FormatToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Format"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormatToMovie" ADD CONSTRAINT "_FormatToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
