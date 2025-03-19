//......................filter( it returns a new array ).........................
//Syntax -> array.filter(callback function)
//use filter mostly when we are using conditions and no any modifications
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99]
const newArr = arr.filter( (item) => (item % 2 == 0))
//console.log(newArr);
const books = [
    {title : "Book 1", genre : "fiction", Book : "1981", edition : "2004"},
    {title : "Book 2", genre : "non-fiction", Book : "1992", edition : "2008"},
    {title : "Book 3", genre : "history", Book : "1999", edition : "2007"},
    {title : "Book 4", genre : "non-fiction", Book : "1989", edition : "2010"},
    {title : "Book 5", genre : "science", Book : "2009", edition : "2014"},
    {title : "Book 6", genre : "fiction", Book : "1987", edition : "2010"},
    {title : "Book 7", genre : "history", Book : "1986", edition : "1996"},
    {title : "Book 8", genre : "science", Book : "2011", edition : "2016"},
    {title : "Book 9", genre : "fiction", Book : "1981", edition : "1989"},
]
//returning the objects whose genre === history
const historyBooks = books.filter( (bk) => (bk.genre === "history"))
//console.log(historyBooks);


//......................map( it returns a new array ).........................
//Syntax -> array.map(callback function)
//use map mostly when you have to perform some operations or modifications
const newArr2 = arr.map( (item) => (item + 10))
//console.log(newArr2);

//......method chaining........
//return value passed to another rightmost function
const newArr3 = arr
                .map( (num) => (num * 10) )
                .map( (num) => (num + 1) )
                .filter( (num) => (num > 70) )
//console.log(newArr3);

//......................reduce.........................
const arr2 = [1, 2, 3, 4]
const totalSum = arr2.reduce( (accumulator, num) => {
    return accumulator + num
}, 0)
//console.log(totalSum);
// first the 0 value is assigned to accumulator and at every return statement accumulator keeps updating
const totalSum2 = arr2.reduce( (accumulator, num) => (accumulator + num), 0)
console.log(totalSum2);

