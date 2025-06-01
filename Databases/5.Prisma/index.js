import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient(); 

const main = async() => {
    //? Insert single user
    // const user = await prisma.user.create({
    //     data : {
    //         name : "ankit",
    //         email : "ankit2@gmail.com"
    //     }
    // })

    //? Insert multiple users
    // const user = await prisma.user.createMany({
    //     data : [
    //         {name : 'thapa', email : "thapa@gmail.com"},
    //         {name : "johnny", email : "johnny@gmail.com"}
    //     ]
    // })

    //?Read the whole table
    // const data = await prisma.user.findMany()


    //?Read a unique entry(only primary key or unique attribute can be used in where clause)
    // const data = await prisma.user.findUnique({
    //     where : {id : 3}
    // })

    //?Read a entry(any attribute can be used in where clause)
    // const data = await prisma.user.findMany({
    //     where : {name : "ankit"}
    // })

    //?Update any entry(only primary key or unique attribute can be used in where clause)
    // const data = await prisma.user.update({
    //     where : {id : 3},
    //     data : {
    //         name : 'ankitBaba'
    //     }
    // })

    //?Update any entry(any attribute can be used in where clause)
    // const data = await prisma.user.updateMany({
    //     where : {id : 3},
    //     data : {
    //         name : 'ankitBaba2'
    //     }
    // })


    //?Delete any entry
    // const data = await prisma.user.delete({
    //     where : {id : 3}
    // })


    //?Delete multiple entry
    const data = await prisma.user.deleteMany({
        where : {id: { in: [4, 5] }}
    })
    console.log(data);


    //!deleteMany, findMany and updateMany will always give number of affected entry 
}; 



main() 
    .catch((e) => {
        console.error(e)
    }) 
    .finally(async () => { 
        await prisma.$disconnect(); 
    });