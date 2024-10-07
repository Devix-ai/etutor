// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { connectMongoDB } from '../../connection/connection';
import UserModel from '../../models/User';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'your-email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        await connectMongoDB();
        const user = await UserModel.findOne({ email: credentials?.email });
        if (!user || typeof user.role !== 'string') {
          return null; 
        }

        const isValid = await compare(credentials!.password, user.password);
        if (!isValid) {
          return null;
        }
        return {
          email: user.email,
          role: user.role, 
          id: user._id.toString(), 
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id; 
      }
      return token; 
    },
    async session({ session, token }) {
      if (session.user) { 
        session.user.role = token.role
        session.user.id = token.id; 
      } else {
        session.user = { role: token.role, id: token.id }; 
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET, // Set your secret in .env.local
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
