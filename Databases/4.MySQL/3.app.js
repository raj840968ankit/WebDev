import mysql from 'mysql2/promise'

//step 1 - Connection with mySql
const db = await mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "8235110951@#",
    database : "mysql_db"
})
console.log("Connection created successfully..........");


// //step 2- Create a database if not given in create connection database parameter
// await db.execute("create database mysql_db");


// //step3 - show databases to check if it is created or not
// console.log(await db.execute('show databases'));

// //using the database
// await db.execute('use mysql_db')


// //step 4 - create table
// await db.execute(`
//     create table users(
//         id int auto_increment primary key,
//         name varchar(100) not null,
//         email varchar(100) not null unique
//     )
// `); 

// console.log(await db.execute('show tables'));


// //step 5 - inserting data
// await db.execute(`
//     insert into users(name, email) values("ankit", "rajankit840968@gmail.com"),
//     ("jonny", "jonny@gmail.com")
// `);


// //step 6 - reading details from a table
console.log(await db.execute("Select * from users"));

