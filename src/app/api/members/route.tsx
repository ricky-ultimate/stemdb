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