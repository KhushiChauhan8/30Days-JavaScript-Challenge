/*Day 12: Error Handling*/
//Activity 1: Basic Error Handling with Try-Catch✅

//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function catchError(){
    try{
        let result = undefined;
        console.log(result.name);
       
    }catch(error){
        console.error("An unusual error occured");
    }
}
catchError();

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

const division = function (n1,n2){
    try{
        if(n2==0){
            throw new Error("denominator can't be 0")//it will throw an error with message
        }
        let result = n1/n2;
        console.log(`result of the division is : ${result}`);
    }
    catch(error){ 
        console.error("error occured!",error.message);
        //here error.message means => denominator can't be 0
    }
}
division(3,0);
division(10,5);
division(4,2);
division(100,0);


//Activity 2: Finally Block✅

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

const myfunction = function(n1,n2){
    try{
        if(n2==0){
            throw new Error("n2 can't be 0")
        }
        let result = n1/n2;
        console.log(result);
    }catch(error){
        console.error("an error occured!",error.message);
    }finally{
        console.log("i am finally block, i will always executed");
    }
}

myfunction(5,5)
myfunction(5,0)
myfunction(0,5)
myfunction(10,2)

//Activity 3: Custom Error Objects✅

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
function throwError() {
    throw new CustomError('This is a custom error message');
}
try {
    throwError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Custom error caught:', error.message);
    } else {
        console.error('Unexpected error:', error.message);
    }
}

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.'

const validateUser = function(st){
    try{
        if(st==="" || st==="null" || st==="undefined" || typeof(st)!=="string"){
            throw new Error("Please provide the valid Name!")
        }
        let userName = st;
        console.log(`hey there! ${userName} welcome to our website`);
    }catch(error){
        console.error("An error occurred: ",error.message);
    }
}


validateUser("john")
validateUser("lorem")
validateUser(1)

//Activity 4: Error Handling in Promises✅

//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(new Error("An unusual error !"))
    },5000)
})

promiseOne.catch((error)=>{
    console.error("error:",error.message);
})

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

const function1 = async function(){
    try{
        let result = await new Promise((resolve,reject)=>{
            Math.random() *10 < 5? resolve("Operation successfull"):reject(new Error("Failed!"));
        })

        console.log("success: ",result);
    }catch(error){
        console.error("Error: ",error.message);
    }
}
function1();

//Activity 5: Graceful Error Handling in Fetch✅

//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://jsonplaceholder.typi.com/posts/2")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error: invalid url!"))

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const checkAPI = async function (){
    try{
       const response = await fetch("https://jsonplaceholder.typicode.com/posts/2")
       if(!response.ok){
            throw new Error("Unable to fetch data from API")
       }
       let data = await response.json()
       console.log(data);
    }catch(error){
        console.error("Error: ",error.message);
    }
}

checkAPI();