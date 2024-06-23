import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('12345', salt);

  const user = await prisma.member.create({
    data: {
      firstName: 'space',
      lastName: 'dad',
      matricno: '12345678',
      email: 'spacedad@milky.com',
      password: hashedPassword, // Store hashed password
      role: 'USER',
>>>>>>> e39386a ("Update createUser function: changed matricno to '1234', email to 'new@.com', and role to 'USER'")
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
