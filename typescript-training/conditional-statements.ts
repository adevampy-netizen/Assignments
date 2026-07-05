//Conditional Statements : Statements along with conditions

//Statement : line of code

//So, there are two different types of conditional statements 
// we have in TypeScript. 

//1. If-Else Statement : When we don't know the result of the condition before itself 
//2. Switch Case Statement : When we want to choose one option among multiple options available 

// 1) if
// 1.1) if ...else
// 2) if ...else if ...else             --> multiple "else if" conditions  
// 3) if {if else } else        --> nested if 
// 3.1) if ...else if{ if else} --> nested if
// 4) switch ...case
// 5) Ternary operator (condition ? value1 : value2)

//if ... else
let age: number = 4;
if (age >= 18) {
    console.log("Eligible to vote")
} else {
    console.log("Not eligible to vote")
    // here also can add 'if condition' when needed
    // else block executes when all previous conditions are FALSE 
}

/*
// if ... else if ... else
let age1: number = 5

if (age1 > 18 ){
    console.log("eligible to vote");
} else if (age >=10){
    console.log("His is studying school ");
} else {
    console.log("he is kid below age 10");
}

// 3) if {if else } else   --> nested if 

let age2: number = 15
let hasVoterID: boolean = true

if (age2 >=18){
    console.log(`${age2} is eligible to vote`);
    if (hasVoterID){
        console.log(`${age2} is eligible to vote and status of voteID is ${hasVoterID}`)
    } else{
        console.log(`age is above 18 but status of voterID is ${hasVoterID}`)
    }
}else{
    console.log(`${age2} is below 18, so not eligible to vote`)
} 


// switch ...case
let browserName = 'edge';
switch(browserName) {
    case 'edge':{
        console.log("run edge browser");
        break
    }

    case 'chrome':{
        console.log("run in chrome browser");
        break
    }
}

   */







