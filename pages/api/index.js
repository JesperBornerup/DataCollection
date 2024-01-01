import {prisma} from "lib/prisma/prisma.ts"


export default async function handle(req, res) {
    const result = await prisma.participant.findMany()
    res.json(result)
    }