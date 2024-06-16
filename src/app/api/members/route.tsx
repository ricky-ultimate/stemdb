import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";

async function createMember(req: NextApiRequest, res: NextApiResponse) {
    const { firstName, lastName, matricno, email, role } = req.body;
    const member = await prisma.member.create({
      data: {
        firstName,
        lastName,
        matricno,
        email,
        role,
      },
    });
    res.status(201).json(member);
  }

  async function getMembers(req: NextApiRequest, res: NextApiResponse) {
    const members = await prisma.member.findMany();
    res.status(200).json(members);
  }

  async function updateMember(req: NextApiRequest, res: NextApiResponse) {
    const { id, firstName, lastName, matricno, email, role } = req.body;
    const member = await prisma.member.update({
      where: { id: parseInt(id) },
      data: {
        firstName,
        lastName,
        matricno,
        email,
        role,
      },
    });
    res.status(200).json(member);
  }

  async function deleteMember(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    await prisma.member.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  }

  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
      case 'GET':
        await getMembers(req, res);
        break;
      case 'POST':
        await createMember(req, res);
        break;
      case 'PUT':
      case 'PATCH':
        await updateMember(req, res);
        break;
      case 'DELETE':
        await deleteMember(req, res);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }