import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";

async function createProject(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, startDate, endDate, members } = req.body;
  if (!title || !description || !startDate || !members) {
    return res.status(400).json({ error: 'Title, description, startDate, and members are required' });
  }
  try {
    const validMembers = await prisma.member.findMany({ where: { id: { in: members } } });
    if (validMembers.length !== members.length) {
      return res.status(400).json({ error: 'Some member IDs are invalid' });
    }
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
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
}


  async function getProjects(req: NextApiRequest, res: NextApiResponse) {
    try {
      const projects = await prisma.project.findMany();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  }


  async function updateProject(req: NextApiRequest, res: NextApiResponse) {
    const { id, title, description, startDate, endDate, members } = req.body;
    if (!id || !title || !description || !startDate || !members) {
      return res.status(400).json({ error: 'ID, title, description, startDate, and members are required' });
    }
    try {
      const validMembers = await prisma.member.findMany({ where: { id: { in: members } } });
      if (validMembers.length !== members.length) {
        return res.status(400).json({ error: 'Some member IDs are invalid' });
      }
      const project = await prisma.project.update({
        where: { id: parseInt(id) },
        data: {
          title,
          description,
          startDate: new Date(startDate),
          endDate: endDate ? new Date(endDate) : null,
          members: {
            set: members.map((memberId: number) => ({ id: memberId })),
          },
        },
      });
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update project' });
    }
  }


  async function deleteProject(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    try {
      await prisma.project.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete project' });
    }
  }


  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
      case 'GET':
        await getProjects(req, res);
        break;
      case 'POST':
        await createProject(req, res);
        break;
      case 'PUT':
      case 'PATCH':
        await updateProject(req, res);
        break;
      case 'DELETE':
        await deleteProject(req, res);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }