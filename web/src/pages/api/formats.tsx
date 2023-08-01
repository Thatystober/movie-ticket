import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handlerFormats(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try{
    if (method === "POST") {
        const {formatTitle} = req.body;
        const newFormat = await prisma.format.create({
          data: {
            formatTitle: 'DUB',
          }
        })
        res.status(200).json(newFormat);
      }else if (method === "GET") {
        const formats = await prisma.format.findMany();

        res.status(200).json(formats);
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
  