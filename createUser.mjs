import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('1234', salt);

  const user = await prisma.member.create({
    data: {
      firstName: 'Random',
      lastName: 'User',
      matricno: '1234',
      email: 'random@user.com',
      password: hashedPassword, // Store hashed password
      role: 'USER',
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
