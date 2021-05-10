# Prisma + Next.js + Serverless-Next.js AWS Component 

Sample project to deploy a simple [Next.js](https://nextjs.org/) application
with [Prisma](https://www.prisma.io/) to [Amazon Web
Services](https://aws.amazon.com/) using the [Serverless Next.js
Component](https://github.com/serverless-nextjs/serverless-next.js/).

## TypeScript

This template is set up to get started with
[TypeScript](https://www.typescriptlang.org/). However, if you need JS only, you
can rename the `.ts` to `.js`, remove the types, and remove `tsconfig.json`.
Alternatively, you could keep `tsconfig.json` for better type hints.

## Database

### Provider

The project is set up to work with a `PostgreSQL` database. If you would like to
change that, head to the `schema.prisma` and change it.

### Connect

At the root of this project, next to your `package.json`,  create an `.env`
file. Insert your database environment variables, they will automatically get
deployed. Do not commit this file.

```
DATABASE_URL=postgres://user:password@host:port/db_name
```

## Deploy

```
npm run deploy
```

## Hot reload

```
npm run dev
```
