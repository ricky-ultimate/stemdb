import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('12345', salt);

  const user = await prisma.member.create({
    data: {
      firstName: 'Ricky',
      lastName: 'Ultimate',
      matricno: '12345',
      email: 'rickyultimate.dev@gmail.com',
      password: hashedPassword, // Store hashed password
      role: 'SUPERADMIN',
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
