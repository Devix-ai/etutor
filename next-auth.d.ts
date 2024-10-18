// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role?: string; // Add the role property
    } & DefaultSession['user'];
  }

  interface User {
    role?: string; // Add the role property
  }

  interface JWT {
    role?: string; // Add the role property
  }
}
