import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/prisma/prisma';
import bcrypt from 'bcryptjs';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        matricno: { label: "Matric No", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.matricno || !credentials.password) {
          console.error('Missing credentials');
          return null;
        }

        try {
          const user = await prisma.member.findUnique({
            where: { matricno: credentials.matricno },
          });

          if (user) {
            const passwordMatch = bcrypt.compareSync(credentials.password, user.password);
            if (passwordMatch) {
              return {
                ...user,
                id: user.id.toString(), // Converts id to string before returning it to the user
              };
            } else {
              console.error('Password does not match');
              return null;
            }
          } else {
            console.error('No user found with this matric number');
            return null;
          }
        } catch (error) {
          console.error('Error in authorize function:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
});
