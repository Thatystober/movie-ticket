-- CreateTable
CREATE TABLE "Format" (
    "id" SERIAL NOT NULL,
    "formatTitle" TEXT NOT NULL,

    CONSTRAINT "Format_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cast" TEXT NOT NULL,
    "director" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Day" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "weekday" TEXT NOT NULL,
    "time" TEXT[],

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FormatToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DayToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FormatToMovie_AB_unique" ON "_FormatToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_FormatToMovie_B_index" ON "_FormatToMovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DayToMovie_AB_unique" ON "_DayToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_DayToMovie_B_index" ON "_DayToMovie"("B");

-- AddForeignKey
ALTER TABLE "_FormatToMovie" ADD CONSTRAINT "_FormatToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Format"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormatToMovie" ADD CONSTRAINT "_FormatToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayToMovie" ADD CONSTRAINT "_DayToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayToMovie" ADD CONSTRAINT "_DayToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
