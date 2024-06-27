import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma/prisma';

export async function POST(req: Request) {
  const { title, description, startDate, endDate, members } = await req.json();
  if (!title || !description || !startDate || !members) {
    return NextResponse.json({ error: 'Title, description, startDate, and members are required' }, { status: 400 });
  }
  try {
    const validMembers = await prisma.member.findMany({ where: { id: { in: members } } });
    if (validMembers.length !== members.length) {
      return NextResponse.json({ error: 'Some member IDs are invalid' }, { status: 400 });
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
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { id, title, description, startDate, endDate, members } = await req.json();
  if (!id || !title || !description || !startDate || !members) {
    return NextResponse.json({ error: 'ID, title, description, startDate, and members are required' }, { status: 400 });
  }
  try {
    const validMembers = await prisma.member.findMany({ where: { id: { in: members } } });
    if (validMembers.length !== members.length) {
      return NextResponse.json({ error: 'Some member IDs are invalid' }, { status: 400 });
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
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  try {
    await prisma.project.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
