import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('123456', salt);

  const user = await prisma.member.create({
    data: {
      firstName: 'Jane',
      lastName: 'Doe',
      matricno: '1234567',
      email: 'jane.doe@example.com',
      password: hashedPassword, // Store hashed password
      role: 'ADMIN',
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
