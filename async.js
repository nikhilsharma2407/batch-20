// setTimeout(() => {
//     console.log('timeout');
// }, 0);





// console.log(promise);

// promise.then((data)=>{
//     console.log("then CB",data)
// }).catch(err=>{
//     console.log("catch CB",err);
// }).finally(()=>{
//     console.log("finally!!");
// });


const url = "https://jsonplaceholder.typicode.com/users";

// promise Hell;
fetch(url).then(res=>{
    res.json().then(userData=>{
        // userData.then(data=>{
            // data.then(finalData=>{
                // console.log(finalData);
            // })
        // })
    });
})
.catch(err=>console.log("Inside catch block",err));


// try/catch

try {
    console.log(username);

} catch (error) {
    console.log("err caught",error.message);    
}finally{
    console.log("finally block");
}

console.log("code after err")
    console.log(1)
    console.log(2)
    console.log(3)

// async await
const promise = new Promise((resolve,reject)=>{
    resolve("promise resolved")
    // reject("Promise rejected!!!")
});

const asyncFn= async()=>{
    // promise.then(data=>console.log(data))
    try {
        const data = await promise;
        // console.log(data); 
    
        // const res = await fetch(url);
        // const userData = await res.json();

        // fetch(url).then(res=>{
        //     res.json().then(userData=>{
        //         console.log(userData);
        //     })
        // })
        const userData = await (await fetch(url)).json()
        console.log("async await",userData);
        
    } catch (error) {
        console.log(error);
    }
};

// asyncFn();


(async()=>{
    try {
        const userData = await (await fetch(url)).json();
        console.log(userData);
        
    } catch (error) {
        console.log(error);
    }
})()


// IIFE Immediately invoked fn expression;


// // const fn = ()=>console.log("fn");
// (()=>console.log("fn"))();
// (()=>console.log("fn1"))();
// (()=>console.log("fn2"))();
