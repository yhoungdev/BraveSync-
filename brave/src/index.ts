import Fastify from "fastify";

const fastify = Fastify({
    logger: true
})

 fastify.get('/' , (req, reply) => {
    reply.send("Hello its working !!! ")
 })



 fastify.listen({port: 3000} , (err, res) => {
    if (err) console.log(err) 
    console.log('Server is listening on PORT 3000')
 })