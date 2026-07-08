// let s: string = ' i am deva '

// let s1: string[] = s.split('am')

// let s2: string[] = s.split(' ')

// console.log(s1)
// console.log(s2)

//first assignment
const string1 : string= "Java programming is fun and challenging";
let arrstring: string[]= string1.split(" ")
let reversestr:string= ""
let s: string = ''


for(let i=arrstring.length-1;i>=0;i--)
{

 reversestr= reversestr+" "+ (arrstring[i]!)
}


for (let arr of arrstring){
    
    let temp = arr.charAt(0).toUpperCase()+arr.substring(1)
    s = s + temp 
    s = s + " "
        
}
console.log(`Total number word in the sentence is ${arrstring.length}`)
console.log(`The reversed sentence is: ${reversestr}`)
console.log(s)

//assignment 2

let ass2string: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let splittedass2 : string[]= ass2string.split(" ")
let count:number=0
let result: string = '' 
for (let i=0;i<splittedass2.length;i++){
   if(splittedass2[0]==splittedass2[i]){
   count++  
   result = result + i + " "
   }  
}
console.log (`Index of the word is ${result}`)
console.log(`count of the occurance is ${count}`)
