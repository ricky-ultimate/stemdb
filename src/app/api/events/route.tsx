import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";

async function createEvent(req: NextApiRequest, res: NextApiResponse) {
    const { name, date, location, description } = req.body;
    const event = await prisma.event.create({
      data: {
        name,
        date: new Date(date),
        location,
        description,
      },
    });
    res.status(201).json(event);
  }