import { NextResponse } from 'next/server';
import prisma from "../../../../prisma/prisma/prisma";
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { firstName, lastName, matricno, email, role, password } = await req.json();
  if (!firstName || !lastName || !matricno || !email || !role || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
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
    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create member' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const members = await prisma.member.findMany();
    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { id, firstName, lastName, matricno, email, role, password } = await req.json();
  if (!id || !firstName || !lastName || !matricno || !email || !role) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
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
    return NextResponse.json(member, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update member' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  try {
    await prisma.member.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete member' }, { status: 500 });
  }
}
