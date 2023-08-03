import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try{
    if (method === "POST") {
      const { image, title, type, duration, rank, formats, description, cast, director, days } = req.body;
      
      const newMovie = await prisma.movie.create({
        data: {
          image,
          title,
          type,
          duration,
          rank,
          description,
          cast,
          director,
          formats: {
            connect: formats.map((idFormat: number) => ({ id: idFormat}))
          },
          days: { 
            connect: days.map((idDay: number) => ({ id: idDay }))
          }
        },
        include: {
          formats: true, 
          days: true 
        },
      });

      res.status(200).json(newMovie);

      }else if (method === "GET") {
        const movies = await prisma.movie.findMany({
          include: {
            formats: true,
            days: true
          },
        });
        
        res.status(200).json(movies);
      } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
      }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error occurred:", error);
      res.status(500).json({ message: "Failed to save data.", error: error.message });
    } else {
      console.error("Unknown error occurred:", error);
      res.status(500).json({ message: "Unknown error occurred." });
    }
  }
}
  