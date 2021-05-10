import {PrismaClient} from '@prisma/client';
import type {GetServerSideProps} from 'next';

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
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
