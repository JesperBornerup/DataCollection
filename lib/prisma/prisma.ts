import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export {prisma}

const globalForPrisma = global as unknown as {

  prisma: PrismaClient | undefined

}


export const prisma =

  globalForPrisma.prisma ??

  new PrismaClient({

    log: ['query'],

  })


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma