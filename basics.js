//map
let arr1 = [1,2,3,4,5,6]
let mapped = arr1.map((item) => item*2)
console.log(mapped)

//filter
let arr2 = [1,2,3,4,5,6]
let filtered = arr2.filter((item) => item % 2 === 0)
console.log(filtered)

//reduce
let arr3 = [1,2,3,4,5,6]
let reduced = arr3.reduce((acc, curr) => { 
acc = acc+curr
return acc
},0)
console.log(reduced)

//rest and set
//rest
function sum(...num) {
    return num.reduce((acc,curr) => acc + curr, 0) 
}
console.log(sum(1,2,3))

//set
const [first, second, ...rest] = [1,2,3,4,5]
console.log(rest)

//Math functions
const numbers = [5, 12, 8, 20, 1]
console.log(Math.max(...numbers)) // 20
console.log(Math.min(...numbers)) // 1

console.log(Math.round(10.55)) // 11
console.log(Math.round(10.25)) // 10

console.log(Math.random()) // 0.256897546 gives any random number between 0 inclusive and 1 exclusive

console.log(Math.cbrt(8)) // 2 (because 2 * 2 * 2 = 8) cube root
console.log(Math.sqrt(9)); // 3 sqaure root
console.log(Math.pow(2, 3)); // 8 power
console.log(Math.PI)


console.log(Math.ceil(4.2));   // 5 rounds up
console.log(Math.ceil(7.8));   // 8
console.log(Math.floor(4.9));   // 4 rounds down
console.log(Math.floor(7.1));   // 7
console.log(Math.abs(-7)); // 7 absolute
console.log(Math.trunc(4.9)); // 4 remove decimal
console.log(Math.trunc(-4.9)); // -4


//splice and slice
//slice -> Creates a new array by copying a portion of the original array. Does not modify the original array.
let arrayToSlice = [1,2,3,4,5,6]
let sliced = arrayToSlice.slice(2,4) // startindex, endindex
console.log(sliced, "sliced") // o/p-> [3,4], starts from startindex but not take last index

//splice ->Modifies the original array by adding, removing, or replacing elements.
//syntax -> [startIndex, DeleteCount, item1,....item2]
const fruits = ["Banana", "Orange", "Apple", "Mango"]

// 1. Remove 1 element starting from index 2
const removed = fruits.splice(2, 1); 
console.log(removed);  // Output: ["Apple"]
console.log(fruits);   // Output: ["Banana", "Orange", "Mango"]

// 2. Add elements at index 2 without removing any
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);   // Output: ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]

// 3. Replace 2 elements starting at index 1
const replaced = fruits.splice(1, 2, "Strawberry", "Peach");
console.log(replaced); // Output: ["Orange", "Lemon"]
console.log(fruits);   // Output: ["Banana", "Strawberry", "Peach", "Kiwi", "Mango"]

//forEach
fruits.forEach((item,index) => { 
console.log(`${index + 1}. ${item}`, 'for each')
})

//for...in ->  Iterates over object keys
const obj = { name: "Ali", age: 25 };
for(let key in user) {
    console.log(`${key}, ${obj[key]}`)
}

//for...of ->  works on iterables, arrays
const iterable = [1,23,54,5,6,8,5,9]
for(let item of iterable) {
    console.log(item)
}

//find
const users = [
  { id:1 ,name: 'anil', age: 10 },
  { id:2 ,name: 'abdul', age: 20 },
  { id:3 ,name: 'gani', age: 30 },
  { id:4 ,name: 'anil', age: 15 }
]

const itemUSer = users.find(x => x.id === 4)
console.log(itemUSer, "find")

// sort
const arrNums = [4, 1, 10, 2];
nums.sort((a, b) => a - b); //asc (b-a) -> desc
console.log(arrNums); 

//reverse
const letters = ['a', 'b', 'c'];
console.log(letters.reverse()); // ['c', 'b', 'a']

//includes
const names = ['Ali', 'Zara', 'Imran'];
console.log(names.includes('Zara')); // true

//push and pop
let aa = [1,2]
aa.push(3)
console.log(aa) //[1,2,3]
aa.pop()
console.log(aa) //[1,2]
aa.unshift(1)
console.log(aa) // [1,1,2]
aa.shift()
console.log(aa) // [1,2]

//join
const lettersToJoin = ['a', 'b', 'c'];
console.log(lettersToJoin.join('-')); // 'a-b-c'

//concat
const ar = [1, 2];
const br = [3, 4];
const combined = ar.concat(br);
console.log(combined); // [1, 2, 3, 4]

//every and some 
const nums1 = [2, 4, 6];
console.log(nums1.every(n => n % 2 === 0)); // true
console.log(nums1.some(n => n > 5)); // true

//index of
const items = ['a', 'b', 'a', 'c'];
console.log(items.indexOf('a')); // 0
console.log(items.lastIndexOf('a')); // 2

//flat
const nested = [1, [2, [3]]];
console.log(nested.flat(2), 'flat'); // [1, 2, 3]

//toUpperCase() / toLowerCase()
"hello".toUpperCase(); // "HELLO"
"WORLD".toLowerCase(); // "world"

//replace()
"JS is cool".replace("cool", "awesome"); // "JS is awesome"

//trim()
"  spaced  ".trim(); // "spaced"

// Object methods
const user = { name: "Ali", age: 25 };
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["Ali", 25]
console.log(Object.entries(user)); // [["name", "Ali"], ["age", 25]]
const a = { x: 1 };
const b = { y: 2 };
const c = Object.assign({}, a, b);
console.log(c); // { x: 1, y: 2 }

//Type conversion
Number("42"); // 42
String(123);  // "123"
Boolean(0);   // false

// parseInt() / parseFloat()
parseInt("100px"); // 100
parseFloat("3.14"); // 3.14


//const now = new Date();
console.log(now.toString());
now.getFullYear(); // 2025
now.getMonth();    // 0–11 (Jan = 0)
now.getDate();     // 1–31


// promises
const data = [
  { name: 'anil', age: 10 },
  { name: 'abdul', age: 20 },
  { name: 'gani', age: 30 },
  { name: 'anil', age: 15 }
]

function getData () {
    return new Promise((resolve,reject) => { 
        if(data && data.length > 0) { 
            resolve(data)
        }else { 
            reject('no data found')
        }
    })
}

getData().then((response) => { 
    console.log(response)
}).catch((error) => {
    console.log(error)
})