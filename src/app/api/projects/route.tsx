import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";

async function createProject(req: NextApiRequest, res: NextApiResponse) {
    const { title, description, startDate, endDate, members } = req.body;
    const project = await prisma.project.create({
      data: {
        title,
        description,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        members: {
          connect: members.map((memberId: number) => ({ id: memberId })),
        },
      },
    });
    res.status(201).json(project);
  }