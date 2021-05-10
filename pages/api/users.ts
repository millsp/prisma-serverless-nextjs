import {PrismaClient} from '@prisma/client';
import type {
    NextApiRequest,
    NextApiResponse,
} from 'next';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const prisma = new PrismaClient();
        const data = await prisma.user.findMany();

        res.status(200).json({v: 42, data});
    } catch (err) {
        res.status(500).json({v: 42, data: JSON.stringify(err, Object.getOwnPropertyNames(err))});
    }
};

export default handler;
