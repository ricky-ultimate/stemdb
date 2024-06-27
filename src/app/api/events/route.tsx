import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma/prisma';

export async function POST(req: Request) {
  const { name, date, location, description } = await req.json();
  if (!name || !date || !location || !description) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
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
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const events = await prisma.event.findMany();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const { id, name, date, location, description } = await req.json();
  if (!id || !name || !date || !location || !description) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
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
    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  try {
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
