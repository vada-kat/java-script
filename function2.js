//a function is a reusable block of code
// a fuction can optopnally have as many parameters as required

function checkAge(yob,user){
    const age = 2024 - yob //moment js
    let suffix =age>1? 'year old.': "year old."
    console.log("hello"+ user+ ".Your are"+ age + suffix );
    return age
}

checkAge(2002, "albert")
checkAge(2023, "Ethan")
checkAge(2024, "joy")
checkAge(2009, "wendy")

// assignments

//write a function called calcultedtotal that takes two numbers (prices) as input. inside the function, add the two numbers together. if the sum is greater than 100,apply a 10% discount by multiplying the sum by 0.9. return the final price after the discount (if applicable)

// write a fuction called is positivenumber that takes a number as input. inside the function use a logical or operator()to check if the number is greater than zero(positive)or equal to zero if is ,return true.otherwise, return false

//control structure -> conditional statement (ternary oprator,if else, switchcase) and loopsn(for loop,for in,for of,while, do while)

//objects--- arrays --also everything in js is an object
//hof
//async js

//DOM-browser js
//practise (alot)
//sql/r database ms
//serverjs /node/express/templates/authentication/authorization/encryption/middleware/