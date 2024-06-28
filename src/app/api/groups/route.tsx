import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";

export async function POST(req: Request, res: NextApiResponse) {
  const { name, leadId } = await req.json();
  if (!name || !leadId) {
    return new Response(JSON.stringify({ error: 'Name and leadId are required' }), { status: 400 });
  }
  try {
    const group = await prisma.group.create({
      data: {
        name,
        leadId,
      },
    });
    return new Response(JSON.stringify(group), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create group' }), { status: 500 });
  }
}

export async function GET(req: Request, res: NextApiResponse) {
  try {
    const groups = await prisma.group.findMany({
      include: {
        lead: true,
        members: {
          include: {
            member: true,
          },
        },
      },
    });
    return new Response(JSON.stringify(groups), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch groups' }), { status: 500 });
  }
}

export async function PUT(req: Request, res: NextApiResponse) {
  const { id, name, leadId } = await req.json();
  if (!id || !name || !leadId) {
    return new Response(JSON.stringify({ error: 'ID, name, and leadId are required' }), { status: 400 });
  }
  try {
    const group = await prisma.group.update({
      where: { id: parseInt(id) },
      data: {
        name,
        leadId,
      },
    });
    return new Response(JSON.stringify(group), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update group' }), { status: 500 });
  }
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const { id } = await req.json();
  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
  }
  try {
    await prisma.group.delete({
      where: { id: parseInt(id) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete group' }), { status: 500 });
  }
}
