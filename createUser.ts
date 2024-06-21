import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('yourpassword', salt);

  const user = await prisma.member.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      matricno: '123456',
      email: 'john.doe@example.com',
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
