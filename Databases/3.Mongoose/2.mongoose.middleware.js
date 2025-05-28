import mongoose from 'mongoose'

//****this file is created for updateAt section in schema especially handle by mongoose-middleware

// Step 1 : Connection with mongoDB server
try {
    //forming a connection with database and with db-name directly in URI
    await mongoose.connect("mongodb://127.0.0.1/mongoose_middleware")
    //here mongoose_database is my db-name

    mongoose.set("debug", true)  //it shows the output that which queries are performed

} catch (error) {
    console.error(error)
    process.exit()
}


// //Step 2 : create schema
// const userSchema = mongoose.Schema({
//     name : {type : String, required : true},
//     email : {type : String, required : true, unique : true},
//     age : {type : Number, required : true, min : 5},
//     createdAt : {type : Date, required : true, default : Date.now()},
//     updatedAt : {type : Date, required : true, default : Date.now()}
// })


// //we will use middleware here and always use before model creation
// //whenever we use mongoose middleware then we will use this keyword
// //in parameter we will specify on which function the middle will work
// userSchema.pre(['updateOne', 'updateMany', 'findOneAndUpdate'], function(next) {    //if we have to something before saving data and use normal function because we will use this keyword
//     this.set({updatedAt : Date.now()})  //before updating data update updatedAt field
//     next() //after updating this function will continue pending work that is saving
// })


//Step 2 : create schema
//we can use createdAt and updateAt without defining in schema and using middleware by adding timestamp
const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    age : {type : Number, required : true, min : 5}
},
{
    timestamps : true
})


//Step 3 : creating a model (collection)
// model(collectionName(singular, not plural), schema)....database will show plural collection name as users
const Users = mongoose.model("user", userSchema) 


// //<----------------------Insertion------------------------------
// await Users.create({name : "Ankit", age : 40, email : "rajankit840968@gmail.com"})


//<----------------------Update------------------------------
await Users.updateOne({email : "rajankit840968@gmail.com"}, {age : 40})

await mongoose.connection.close()