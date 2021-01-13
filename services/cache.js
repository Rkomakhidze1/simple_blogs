// const { response } = require('express');
// const mongoose = require('mongoose');
// const redis = require('redis')
// const util = require('util')


// const redisUrl = 'redis://127.0.0.1:6379'
// const client = redis.createClient(redisUrl)
// client.get = util.promisify(client.get);

// const exec = mongoose.Query.prototype.exec

// mongoose.Query.prototype.exec = async function () {
//     const key = {...this.getQuery(), collection: this.mongooseCollection.name}
//     // console.log(key)
//     // check cache, if data alredy exists return from cache
   
//     const data = await client.get(JSON.stringify(key))
//     console.log(data)
//     if(data !== {} && data === null) {
//         const dataObject = JSON.parse(data)
//         return  Array.isArray(dataObject) ? 
//                 dataObject.map(d => new this.model(d)) :
//                 new this.model(dataObject)
//     }
  

//     // if not query mongo and save data in redis
    
//     // console.log(responseFromMongo)
//     // client.set(JSON.stringify(key), JSON.stringify(responseFromMongo))

//     return exec.apply(this, arguments)
// } 