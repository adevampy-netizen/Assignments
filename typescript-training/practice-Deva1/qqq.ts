const string1 : string= "Java programming is fun and challenging";
let arrstring: string[]= string1.split(" ")
let s: string = ''
console.log(`Total number word in the sentence is ${arrstring.length}`)

console.log(arrstring)
let i = 0

for (let arr of arrstring){
    
    let temp = arr.charAt(0).toUpperCase()+arr.substring(1)
    s = s + temp 
    s = s + " "
        
}

console.log(s)


