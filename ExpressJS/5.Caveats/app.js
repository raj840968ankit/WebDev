//............................Caveats........................................
//**In newer version of nodeJS(14.8+) we can use top level await without wrapping in async function**

import express from 'express'

const app = express()

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
const data = await response.json()
console.log(data);
