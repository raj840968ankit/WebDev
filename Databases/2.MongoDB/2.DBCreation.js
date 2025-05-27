//........Connection, Creation of DB, collection and insertion of documents..............

import { MongoClient } from 'mongodb'

//creating an instance of mongodb client and give url as "mongodb://127.0.0.1" where "127.0.0.1" is localhost IP
const client = new MongoClient("mongodb://127.0.0.1")

await client.connect()  //now i have connected to mongoDB. It returns a promise that's why await used

//<------------------------------------Creating DB--------------------------------------->

const db = client.db("mongoDB_nodejs_db")  //creation of a database

const userCollection = db.collection("users")  //creation of user collection

//<------------------------------------Inserting Data--------------------------------------->

// userCollection.insertOne({name : "Ankit", age : 21, devotion : "Mahakaal"})   //inserting single document

// userCollection.insertOne({name : "Jonny", age : 22, devotion : "Mahakaal"})

// userCollection.insertMany([{name : "Sonu", age : 21, role : "frontend"},    //inserting many document at once
//     {name : "Monu", age : 24, role : "backend"},
//     {name : "Tonu", age : 26, role : "DBA"}
// ])


//<------------------------------------Reading Data--------------------------------------->

//const userCursor = await userCollection.find().toArray() //returns whole document and a cursor with promise object

//console.log(userCursor);

const singleDocQuery = await userCollection.findOne({name : "Monu"})
//console.log(singleDocQuery);
//console.log(singleDocQuery._id.toHexString());


//<------------------------------------Updating Data--------------------------------------->

//this update query means set age of user whose name is 'Sonu'
await userCollection.updateOne({name : "Sonu"}, {$set : {age : 30}})


//<------------------------------------Deleting Data--------------------------------------->
const del = await userCollection.deleteOne({name : "Sonu"})
console.log(`${del.deletedCount} document deleted`);
