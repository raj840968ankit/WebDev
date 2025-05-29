import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient(); 

const main = async() => {
    //? Insert single user
    const user = await prisma.user.create({
        data : {
            name : "ankit",
            email : "ankit2@gmail.com"
        }
    })
    console.log(user);
}; 



main() 
    .catch((e) => {
        console.error(e)
    }) 
    .finally(async () => { 
        await prisma.$disconnect(); 
    });