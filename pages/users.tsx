import {PrismaClient} from '@prisma/client';
import type {GetServerSideProps} from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const prisma = new PrismaClient();
        const data = await prisma.user.findMany();

        return {
            props: {data},
        };
    } catch (e) {
        return {
            props: {
                data: {
                    message: e.message,
                    stack: e.stack,
                },
            },
        };
    }
};

export default function Home({data}: any) {
    return (
        <div>{JSON.stringify(data)}</div>
    );
}
