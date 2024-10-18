import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export const withRole = (roles: string[]) => {
    return async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
        const session = await getSession({ req });

        if (!session || !roles.includes(session.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    };
};
