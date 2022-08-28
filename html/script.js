// var - function scoped
// var declarations are hoisted
// let block scoped
// not hoised it'd be in TDZ 

var abc = "global var"
function fn(){
    console.log(username);
    
    if(true){
        var username = "Nikhil";
        let num = 2
    console.log("inside block",num);
    console.log("inside block",username)
    };
    console.log(name)
    // console.log(num);
}


fn()
// console.log(username);

const PI = 3.14


// Datatypes in JS - 
// 1.number
// 2 string
// boolean
// 3 arrays
// 4 objects
// 5 undefined

let num = 1.234

let amount = 1000000;
num = num.toFixed(2);
console.log(amount);
console.log(amount.toLocaleString())
console.log(amount.toLocaleString('en-in'))

// string
let str = 'hello World!!';
console.log(str.substring(0,5));
num = "abc"

num = parseInt(num)
// let balance = 10

console.log(num);

console.log(NaN != NaN);

// str[0] = 'H';will not work
str = str.replace("h","H")
console.log(str);
console.log(str.split(' '));

// const arr = [1,2,3,"abc",{name:"test"},NaN, null, undefined]
// console.log(arr);

// true false
// Truthy
[]
{}


// Falsy
0
""
NaN
undefined
null

let obj = null


const student = {
    name:"abc",
    id:101,
    course:"CSE"
};

// const student2 = {...student};
const student2 = student;
// const arr = [1,2,3]

student.name = "Nikhil";
console.log(student2.name);
a++;b++;c++
// console.log(student.id,student.name);


