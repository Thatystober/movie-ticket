import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try{
    if (method === "POST") {
      const { image, title, type, duration, rank, formats } = req.body;

        const createdFormats = await Promise.all(
          formats.map((format: string) =>
            prisma.format.create({
              data: {
                formatTitle: format,
              },
            })
          )
        );
        const formatIds: number[] = createdFormats.map((format) => format.id);

        const newMovie = await prisma.movie.create({
          data: {
            image,
            title,
            type,
            duration,
            rank,
            formats: {
              connect: formatIds,
            },
          },
          include: {
            formats: true, // Para incluir os detalhes dos formatos no resultado
          },
        });

        res.status(200).json(newMovie);
      }else if (method === "GET") {
        const movies = await prisma.movie.findMany({
          include: {
            formats: true, // Para incluir os detalhes dos formatos no resultado
          },
        });
        res.status(200).json(movies);
      // }else if (method === "DELETE") {
      //   // Extract the movie ID from the request query parameters
      //   const { id } = req.query;

      //   // Delete the movie from the database
      //   const deletedMovie = await prisma.movie.delete({
      //     where: {
      //       id: Number(id),
      //     },
      //   });

      //    const deletedFormat = await prisma.format.delete({
      //     where: {
      //       id: Number(id),
      //     },
      //   });
      //   res.status(200).json({deletedMovie, deletedFormat});

      } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
      }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Failed to save data." });
  }
}
  