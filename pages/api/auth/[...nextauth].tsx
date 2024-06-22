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
                id: user.id.toString(), // Converts id to string before returning it to the user
                email: user.email,
                role: user.role,
                name: `${user.firstName} ${user.lastName}`,
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
    async session({ session, token }) {
      console.log('Session callback - token:', token); // Add debugging information
      if (session.user && token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.name = token.name;
      }
      console.log('Session callback - session:', session); // Add debugging information
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
});
