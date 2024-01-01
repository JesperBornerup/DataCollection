import {prisma} from "lib/prisma/prisma.ts"

// POST /api/notes
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
    if (req.method === 'POST') {
        const PID = req.body.pid
        const note = req.body.note
        const category = req.body.category
        const timer = req.body.timer

        const result = await prisma.nurseNote.create({
            data: {
                PID: PID,
                note: note,
                category: category,
                timer: timer
            }
        })
        res.json()
    }
    if (req.method === 'GET') {
        const result = await prisma.nurseNote.findMany();
        res.json(result)
    }
}
