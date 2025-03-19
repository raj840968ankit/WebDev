console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.7))
console.log(Math.PI.toFixed(3))
console.log(Math.pow(2,3))
console.log(Math.sqrt(2).toFixed(3))
console.log(Math.cbrt(8))
console.log(Math.max(-4,3,9,1))
console.log(Math.min(-4,3,9,1))

//Math.random() => it generates value from 0(inclusive) and 1(exclusive)
console.log(Math.random());

//to get a random number in range, for example a dice (1-6)
const max = 1;
const min = 6;
console.log(Math.floor(Math.random()*(max - min + 1)) + min);

