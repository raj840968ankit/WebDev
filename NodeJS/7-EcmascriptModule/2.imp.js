// import addition from './1.exp.js' // importing single function using default in export
// import {add} from './1.exp.js'  //using export keyword directly with function
// import {add, sub, PI} from  './1.exp.js'  //importing multiple functions

// console.log(add(100, 50));
// console.log(sub(100, 50));
// console.log(PI);

import * as math from './1.exp.js' //alternative way of importing multiple functions
console.log(math.add(100, 50));
console.log(math.sub(101, 50));
console.log(math.PI);

