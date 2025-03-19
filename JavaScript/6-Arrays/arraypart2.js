// .......it will mostly be useful in react and node.........
const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

const allHeroes = marvelHeroes.concat(dcHeroes)    // returns a new array without modifying existing arrays
console.log(allHeroes);

const allHeroes2 = [...marvelHeroes, ...dcHeroes]    // spread operator is also works as concat but it is more flexible for more than 2 arrays
console.log(allHeroes2);

const newArr = [1, 2, 3, [4, 5, 6], [7, 8, [9]]]
const newArr2 = newArr.flat(Infinity)  
console.log(newArr2);   //returns a new array where multi-dimensional arrays elements are converted to 1-dimension array

console.log(Array.from("ankit"));  //converts string to array
console.log(Array.from({name : "ankit"}))  //interesting converts string value to array and it returns also an empty array [] for key

console.log(Array.isArray("ankit"))   //check whether it is array or not

val1 = 10
val2 = 15
val3 = 20
console.log(Array.of(val1, val2, val3));  // return a new array of given elements

