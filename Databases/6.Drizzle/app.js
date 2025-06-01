import { db } from "./config/drizzle.db.js";
import { usersTable } from "./drizzle/schema.js";
import {eq} from 'drizzle-orm'

const main = async () => {
    //? insert a single entry
    // const data = await db.insert(usersTable).values({name : "ankit", age : 23, email : "ankit@gmail.com"})

    //? insert multiple entry
    // const data = await db.insert(usersTable).values([
    //     {name : "raj", age : 21, email : "raj@gmail.com"},
    //     {name : "kumar", age : 24, email : "kumar@gmail.com"}
    // ])

    //?Read the table
    // const data = await db.select().from(usersTable)
    // console.log(data);

    //?Read a single entry
    // const data = await db.select().from(usersTable).where({email : 'raj@gmail.com'})
    // console.log(data);

    //?Update a single entry(Not recommended)
    //const data = await db.update(usersTable).set({name : "rajankit"}).where({email = "raj@gmail.com"})


    //?Update a single entry(Recommended)
    // const data = await db.update(usersTable).set({name : "rajankit"}).where(eq(usersTable.email , "raj@gmail.com"))
    // console.log(data);

    //?Deleting a entry(Not recommended)
    // await db.delete(usersTable).where({name : "kumar"})

    //?Deleting a entry(Recommended)
    await db.delete(usersTable).where(eq(usersTable.email , "raj@gmail.com"))
}


main().catch((error) => {
    console.error(error);
})