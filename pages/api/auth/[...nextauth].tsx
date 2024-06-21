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
            return null;
          }

        const user = await prisma.member.findUnique({
          where: { matricno: credentials?.matricno },
        });

        if (user && bcrypt.compareSync(credentials?.password, user.password)) {
          return {
            ...user,
            id: user.id.toString(),  //converts id to string before returning it to the user
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
     async session({ session, user }) {
      // Add type guards to ensure user and session.user are defined
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
