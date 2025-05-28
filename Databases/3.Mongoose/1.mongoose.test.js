import mongoose from 'mongoose'

// Step 1 : Connection with mongoDB server
try {
    //forming a connection with database and with db-name directly in URI
    await mongoose.connect("mongodb://127.0.0.1/mongoose_database")
    //here mongoose_database is my db-name

    mongoose.set("debug", true)  //it shows the output that which queries are performed

} catch (error) {
    console.error(error)
    process.exit()
}


//Step 2 : create schema (validated one)
const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    age : {type : Number, required : true, min : 5},
    createdAt : {type : Date, required : true, default : Date.now()}
})


//Step 3 : creating a model (collection)
// model(collectionName(singular, not plural), schema)....database will show plural collection name as users
const Users = mongoose.model("user", userSchema) 


//<----------------------Insertion------------------------------
await Users.create({name : "Ankit", age : 40, email : "rajankit840968@gmail.com"})


await mongoose.connection.close()
