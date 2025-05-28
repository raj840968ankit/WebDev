import mysql from 'mysql2/promise'

//!step 1 - Connection with mySql
const db = await mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "8235110951@#",
    database : "mysql_db"
})
console.log("Connection created successfully..........");


//!step 2- Create a database if not given in create connection database parameter
// await db.execute("create database mysql_db");


//!step3 - show databases to check if it is created or not
// console.log(await db.execute('show databases'));

//!using the database
// await db.execute('use mysql_db')


//!step 4 - create table
// await db.execute(`
//     create table users(
//         id int auto_increment primary key,
//         name varchar(100) not null,
//         email varchar(100) not null unique
//     )
// `); 

// console.log(await db.execute('show tables'));


//!step 5 - inserting data (Not recommended)
// await db.execute(`
//     insert into users(name, email) values("ankit", "rajankit840968@gmail.com"),
//     ("jonny", "jonny@gmail.com")
// `);

//*Insertion to prevent ingestion(Recommended)
//for single entry insertion
// await db.execute(`insert into users(name, email) values(?, ?)`,  ["thapa", "thapa@gmail.com"]) 

//for multiple entry insertion
// const user = [
//      ["thapa", "thapa@gmail.com"],    
//      ['ankit2', 'ankit@gmail.com']
//  ]
// await db.query(`insert into users(name, email) values ?`, [user])



//!step 6 - reading details from a table
//!execute() method returns an array but only first part of array is required data and other part is metadata
//!so we will destructure here to get first part of array only
// const [rows] = await db.execute("Select * from users")
// console.log(rows);


//!step 7 - updating details in a table
try {
    //*Not recommended
    //await db.execute(`update users set name='jonnie' where email='jonny@gmail.com'`);

    //*Recommended
    await db.execute(`update users set name=? where email=?`, ["ankitraj", 'rajankit840968@gmail.com']);
} catch (error) {
    console.error(error);
}


//!Step 8 - Deleting from table
try {
    //*Not recommended
    //await db.execute(`delete from users where email='ankit@gmail.com'`)

    //*Recommended
    await db.execute(`delete from users where email=?`, ['thapa@gmail.com'])
} catch (error) {
    
}

const [rows] = await db.execute("Select * from users where name=?", ["ankitraj"])
console.log(rows);
