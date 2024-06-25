import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";
import bcrypt from 'bcryptjs';

async function createMember(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, matricno, email, role, password } = req.body;
  if (!firstName || !lastName || !matricno || !email || !role || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const member = await prisma.member.create({
      data: {
        firstName,
        lastName,
        matricno,
        email,
        role,
        password: hashedPassword,
      },
    });
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create member' });
  }
}

  async function getMembers(req: NextApiRequest, res: NextApiResponse) {
    try {
      const members = await prisma.member.findMany();
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch members' });
    }
  }

  async function updateMember(req: NextApiRequest, res: NextApiResponse) {
    const { id, firstName, lastName, matricno, email, role, password } = req.body;
    if (!id || !firstName || !lastName || !matricno || !email || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    try {
      const data: any = {
        firstName,
        lastName,
        matricno,
        email,
        role,
      };
      if (password) {
        data.password = await bcrypt.hash(password, 10);
      }
      const member = await prisma.member.update({
        where: { id: parseInt(id) },
        data,
      });
      res.status(200).json(member);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update member' });
    }
  }

  async function deleteMember(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    try {
      await prisma.member.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete member' });
    }
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