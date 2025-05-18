//to validate environment variable (install zod package "npm i zod")

import {z, ZodError} from 'zod'

// //.........now create a schema...........
// const userAgeSchema = z.number().max(40).min(18).int()   //it first check number, then max, then min, then int

// const userAge = 19

// try {
//     const parsedUserAge = userAgeSchema.parse(userAge)
//     console.log(parsedUserAge);
// } catch (error) {
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
//     }
//     else{
//         console.log('Unknown Error '+error);
//     }
// }

// 'coerce' coverts string to number
const portSchema = z.coerce.number().min(1).max(6500).default(4000);
export const port = portSchema.parse(process.env.PORT)







