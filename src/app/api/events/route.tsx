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


  async function getEvents(req: NextApiRequest, res: NextApiResponse) {
    const events = await prisma.event.findMany();
    res.status(200).json(events);
  }


  async function updateEvent(req: NextApiRequest, res: NextApiResponse) {
    const { id, name, date, location, description } = req.body;
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: {
        name,
        date: new Date(date),
        location,
        description,
      },
    });
    res.status(200).json(event);
  }


  async function deleteEvent(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  }