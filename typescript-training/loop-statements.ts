// A loop is a way to "repeat a block of code" until a condition becomes false.  
// example: "Keep doing this task until I tell you to stop."  

// When to use for loop:  Use a for loop when you know the number of iterations.
// 1) for loop

/*

syntax
for (initialization; condition; increment) {

}

for (
    let i = 1;   // 1️⃣ Initialization (runs only once)

    i <= 5;      // 2️⃣ Condition (checked before every iteration)

    i++          // 3️⃣ Increment (runs after each iteration)
)
Initialization
      ↓
Check Condition
      ↓
True?
      ↓
Execute loop body
      ↓
Increment
      ↓
Go back to Condition

Notice that the initialization runs only once, while the condition and increment happen repeatedly.

*/



// print deva 5 times

let name: string = 'deva'
for (let i = 1; i<=5; i++){
    console.log(`${i} my name is ${name}`)
    // console.log("my name is "+name+". How are you")
}

// i++   means i = i+1
// i --  means i = i-1


// Reverse loop

for (let i = 5; i>=1; i--){
    console.log(`numbers in reverse ${i}`)
    console.log("$$")
} 


// 1) while loop
// 2) do while loop

// while... loop
// A while loop repeats as long as the condition is true.

/*
syntax
while (condition) {
    // code
}

*/

// print 5 times

let name1: string = 'logi'
let i = 1
while(i <= 5){
    console.log(`printing the name ${name1} for "${i}st" time`); 
    i = i + 1
}


/*
do... while loop  
The code inside the loop always runs at least once, even if the condition is false.
why it executes atleast once = because of "Execution order"

do {
    // code
} while (condition);

*/

let j = 1
do {
    console.log(`print ${j}`)
    j = j+1 
}while(j <=5)

