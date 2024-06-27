import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, date, location, description } = req.body;
  if (!name || !date || !location || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const event = await prisma.event.create({
      data: {
        name,
        date: new Date(date),
        location,
        description,
      },
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
}


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}


export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id, name, date, location, description } = req.body;
  if (!id || !name || !date || !location || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
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
  } catch (error) {
    res.status(500).json({ error: 'Failed to update event' });
  }
}


export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }
  try {
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
}