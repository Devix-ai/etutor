// middleware.ts

import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';
import { Token } from '../types/Token';

export async function middleware(req: NextRequest) {
    const token = (await getToken({ req })) as Token | null; // Type assertion here

    if (token && token.role) {
        const { role } = token;
        const redirectPaths: Record<string, string> = {
            admin: '/admin/dashboard',
            teacher: '/teacher/dashboard',
            student: '/student/dashboard',
            parent: '/parent/dashboard',
        };

        if (redirectPaths[role]) {
            return NextResponse.redirect(redirectPaths[role]);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/protected-route'], // Adjust this to your protected routes
};
