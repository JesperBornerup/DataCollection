import {prisma} from "lib/prisma/prisma.ts"
//write a function to handle the login
// it should take id in request as parameter and it is a GET method
export default async function handle(req, res) {
    //if the request is GET
    if (req.method === 'GET') {
        //get the id from the request
        const id = req.query.id
        //find the user with the id
        const result = await prisma.participant.findUnique({
            where: {
                ID: id
            }
        })
        //return the result
        if(result == null){
            res.status(404).json({error: "User not found"})
        }
        else{
        res.json(result)
        }
    }
    if(req.method === 'POST'){
        const idd = req.body.id;
        const category = req.body.category;
        //Create a user iwth the id and category instead
        const result = await prisma.participant.create({
            data: {
                name: idd,
                type: category
            }
        })
        res.json(result)
    }

}