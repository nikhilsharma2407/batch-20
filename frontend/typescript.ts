// type Annotations

let name;

name = false;
name = "Nikhil";
name = 123;
// var variable:number
// var variable:string
// var variable:boolean
let arrNums: any[] = [1, 2, 3, "123", true];

console.log(arrNums);
// typescript -> javascript (transpilation)
// arrNums.push("123");


let inputValue: string | boolean;

inputValue = "some string";
inputValue = false;
inputValue = 123;


let apiData: number | undefined;
apiData = 123;




// create a function take add two numbers and return sum;

// function myfunc(arg1:type1,arg2:type2):returnType{

// }

const sum = (num1: number, num2: number): number => {
    return num1 + num2
};

sum(1, 2);


// interface is like a contract

interface IUser {
    readonly id: string
    title: string
    firstName: string
    lastName: string
    picture?: string
}

const users:IUser[] = [
    {
        "id": "60d0fe4f5311236168a109ca",
        "title": "ms",
        "firstName": "Sara",
        "lastName": "Andersen",
        "picture": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cb",
        "title": "miss",
        "firstName": "Edita",
        "lastName": "Vestering",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cc",
        "title": "ms",
        "firstName": "Adina",
        "lastName": "Barbosa",
        "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cd",
        "title": "mr",
        "firstName": "Roberto",
        "lastName": "Vega",
        "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109ce",
        "title": "mr",
        "firstName": "Rudi",
        "lastName": "Droste",
        "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cf",
        "title": "mrs",
        "firstName": "Carolina",
        "lastName": "Lima",
        "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d0",
        "title": "mr",
        "firstName": "Emre",
        "lastName": "Asikoglu",
        "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d1",
        "title": "mr",
        "firstName": "Kent",
        "lastName": "Brewer",
        "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d2",
        "title": "mr",
        "firstName": "Evan",
        "lastName": "Carlson",
        "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d3",
        "title": "mr",
        "firstName": "Friedrich-Karl",
        "lastName": "Brand",
        "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
    }

]

const user:IUser = {
    "id": "60d0fe4f5311236168a109cd",
    "firstName":"test",
    "title": "mr",
    "lastName": "Vega",
    "picture": "https://randomuser.me/api/portraits/med/men/25.jpg",
};


users.forEach(e=>{
    e.firstName;
});


// string constants

enum Url{
    LOGIN = "/user/login",
    SIGNUP = "/user/signup",
    ADD_FRIEND = "/user/addFriend",
    REMOVE_FRIEND = "/user/removeFriend",    
}


enum WorkingDays{
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
}



// mapped types

type Attendance = {[key in WorkingDays]?:boolean}

let attendance:Attendance = {}


// attendance.Caturday = true;

// Generics

// create a function takes two string or two number and return their sum or contatenation;


type StrOrNum = string|number;

const add = <T extends StrOrNum>(arg1:T,arg2:T):T=>{
    console.log(<any>arg1+arg2);
    return <any>arg1+arg2;
}

add(1,2);
add<number>(1,2);
add<string>("1","2");

add("1",false);

add<number>(1,'1');
add("1",1);



// console.log(Url.LOGIN);


export { }