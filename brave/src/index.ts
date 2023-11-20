import Fastify from "fastify";
import { handleBackup } from "./controller/handle_backup";

const fastify = Fastify({
    // logger: true
})

 fastify.get('/' , (req, reply) => {
    handleBackup()
    return reply.send("Hello its working !!! ")
 })



 fastify.listen({port: 3000} , (err, res) => {
    if (err) console.log(err) 
    console.log('Server is listening on PORT 3000')
 })