const arr = [1, 2, "abc", null];

console.log(arr[1000]);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// };

const cb = (val, myIdx, testarr) => {
    // console.log(val,myIdx,testarr);
};

arr.forEach(cb)
// arr.forEach((val,index)=>{console.log(index,val)});


const add = (val, var2) => {
    console.log(val, var2);
};


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = nums.map((x => x * 2));
const even = nums.filter(x => !(x % 2));
console.log(even);
const odd = nums.filter(x => x % 2);
console.log(odd);

const oddSquares = nums.filter(x => x % 2).map(x => x * x);
console.log(oddSquares);

const sum = nums.reduce((sum,num)=>{
   sum+=num;
   return sum 
},0);

const prod = nums.slice(0,5).reduce((mul,num)=>mul*num,1);
console.log(sum);
console.log(prod);

console.log(nums);

const sumSquareOddNums = nums.filter(x=>x%2)
.map(x=>x*x)
.reduce((sum,val)=>sum+val);


console.log(sumSquareOddNums);

const temp = nums.reduce((prev,curr)=>{
    console.log({prev},{curr});
    return prev+curr;
})


const reduceOnlySumSquareOdd = nums.reduce((sum,curr)=>{
    if (curr%2){
        sum+=curr*curr;
    };
    return sum;
});



console.log(reduceOnlySumSquareOdd === sumSquareOddNums);


console.log(1=="1");
console.log(1==="1");
"1,2,3" == [1,2,3]

const a  = [1,2,3]
// const b = [1,2,3]
const b = a
// are a and b same array/object (i.e same memory address)
console.log(a==b);

console.log(a.toString() == [1,2,3].toString());


const obj1 = {name:"test",email:"abc"}

const obj2 = {name:"test",email:"abc"}

console.log(JSON.stringify(a) == JSON.stringify(obj2)); 

