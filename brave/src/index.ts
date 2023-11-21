import Fastify from "fastify";
import { openBravePrefsInternals } from "./controller/handle_backup";

const fastify = Fastify({
    // logger: true
})

 fastify.get('/' , (req, reply) => {
    openBravePrefsInternals()
    return reply.send("Hello its working !!! ")
 })



 fastify.listen({port: 3000} , (err, res) => {
    if (err) console.log(err) 
    console.log('Server is listening on PORT 3000')
 })