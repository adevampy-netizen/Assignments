// Left angle triangle
/*
const rows: number = 5;

for (let i = 1; i <= rows; i++) { // no. of rows
    let pattern = "";

    // Print spaces  // values to print in rows
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Print stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}

// right angle triangle
const rows: number = 5;
for (let i = 1; i <= rows; i++) {
 
    console.log("*".repeat(i))
}    

//right angle triangle

const rows: number = 5;

for (let i = 1; i <= rows; i++) { // no. of rows
    let pattern = "";

    // Print stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}

*/




// let a: string[] = ['deva', 'logi', 'harsha']
// for( let i = 0; i<=a.length -1; i++){
//     console.log(a[i])
// }

/*
// for... of loop with array

let name: string[] = ['deva', 'logi', 'harsha', 'sabari']
for (let n of name){
    console.log(`using for...of loop = ${n}`)
}

// for ... in loop with array

let name1: string[] = ['deva1', 'logi1', 'harsha1', 'sabari1']

for(let n in name1){
    console.log(`printing index ${n} and its values '${name1[n]}'`)
}

*/


/*
// working with objects
// for ...in loop

let empdetails = {
    name : 'deva',
    age : 34,
    state : 'tamilnadu'
}

// console.log(typeof(empdetails))  //object   //typeof used to find datatype

for (let emp in empdetails){
    // console.log(emp)
    console.log(empdetails[emp as keyof typeof empdetails] )
}

*/



let fruits: string[] = ['apple', 'mango', 'apple', 'grapes', 'apple','grapes'];

// empty object    
// variable name: data type       before colon var name : after colon datatype
let fruitcount: {[key:string] :number} ={}

for (let fruit of fruits){
    if (fruit in fruitcount){   //in operator works to check for keys 
        fruitcount[fruit] = fruitcount[fruit]! +1

    }

    else{
        fruitcount[fruit] = 1
    }
}


console.log(fruitcount)




