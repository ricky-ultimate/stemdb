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