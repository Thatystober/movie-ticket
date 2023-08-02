import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try{
    if (method === "POST") {
      const { formatTitle } = req.body;

      const newFormat = await prisma.format.create({
        data: {
          formatTitle
        },
      });

      res.status(200).json(newFormat);
    }else if(method === "GET"){
      const formats = await prisma.format.findMany();
      res.status(200).json(formats);
    }
    
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Failed to save data." });
  }
}