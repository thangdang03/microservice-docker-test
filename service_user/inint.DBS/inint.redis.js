const redis= require('redis');

const Client = redis.createClient({
    url: `redis://${process.env.REDIS_LINK}`,
});

Client.connect().then((err,result)=>{
    console.log(result)
}).catch(console.error)

Client.on('error', err => console.log('Redis Client Error', err));

module.exports = Client;

