import {PrismaClient} from '@prisma/client';
import type {
    NextApiRequest,
    NextApiResponse,
} from 'next';

const prisma = new PrismaClient();

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await prisma.user.findMany();

        res.status(200).json({data});
    } catch (err) {
        res.status(500).json({data: JSON.stringify(err, Object.getOwnPropertyNames(err))});
    }
};

export default handler;
