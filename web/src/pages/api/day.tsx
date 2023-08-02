import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try{
    if (method === "POST") {
      const { date, weekday, time } = req.body;

      const newDay = await prisma.day.create({
        data: {
          date,
          weekday,
          time,
        },
      });

      res.status(200).json(newDay);
    }else if(method === "GET"){
      const days = await prisma.day.findMany();
      res.status(200).json(days);
    }
    
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Failed to save data." });
  }
}