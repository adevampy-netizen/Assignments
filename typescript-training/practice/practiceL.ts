// for(let i=1;i<=10;i++){
//     if(i%2==0)
//     {
//         console.log("Even numbers are " + i)

//     }
//     else
//     {
//         console.log("Odd numbers are " + i)
//     }
// }
//print all the from 1 to 10
// for(let i=1;i<=10;i++)
// {
//     console.log(i)
// }

// //print all even numbers between 1 and 10
// for(let i=1;i<=10;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i)
//     }
// }

// //print all odd numbers between 1 and 10
// for(let i=1;i<=10;i++)
// {
//     if(i%2!==0)
//     {
//         console.log(i)
//     }
// }
//sum of number from 1 to 10
// let sum:number=0
// for (let i=1; i<=10;i++)
// {
//     sum+=i
// }
// console.log(sum)
//factorial

// let n : number=7
// let factorialNumber : number=1

// for(let i: number=2; i<=n;i++){
//     factorialNumber=factorialNumber*i
// }
// console.log(`Given number ${n}'s factorial is ${factorialNumber} `)

// 

// let n: number = 5
// let prime: boolean = true

// if (n <= 1) {
//     prime = false
// }
// for (let i = 2; i < n; i++) {
//     if (n % 2 == 0) {
//         prime = false
//         break
//     }
// }
// if (prime) {
//     console.log("Given number is prime")
// }
// else {
//     console.log("Given number is not prime")
// }


//fabonicci seires
// function fabonacci(n:number):void{
//     let a = 0;
//     let b = 1
//  for(let i=0;i<n;i++){
//     console.log(a)
// let next=a+b
// a=b
// b=next
//  }
// }

// fabonacci(10)

// interface empd {
//     "empname": string,
//     "salary": number,
//     "Exp": number,
//     "rating": number
// }

// let empdetails: empd[] = [{
//     "empname": "Alice  Johnson",
//     "salary": 75000.0,
//     "Exp": 5.1,
//     "rating": 4.2
// },
// {
//     "empname": "Bob Smith",
//     "salary": 75000.0,
//     "Exp": 3.2,
//     "rating": 3.8
// },
// {
//     "empname": "Carol Davis",
//     "salary": 82000.0,
//     "Exp": 7.1,
//     "rating": 4.5
// },
// {
//     "empname": "David Brown",
//     "salary": 90000.0,
//     "Exp": 10.2,
//     "rating": 2.5
// },
// {
//     "empname": "Eva Green",
//     "salary": 60000.0,
//     "Exp": 2.4,
//     "rating": 3.5
// }
// ]
// let result: Map<string, number> = new Map()
// for (let empDetails of empdetails) {
//     let variablePay: number = 0
//     let bonus: number = 0
//     let reward: number = 0
//     if (empDetails.rating >= 4) {
//         variablePay = 15
//         bonus= 1500
//     }

//     else if (empDetails.rating >= 3 && empDetails.rating < 4) {
//         variablePay= 10
//         bonus = 1200

//     }
//     // else (empDetails.rating < 3)
//     else
//     {
//         variablePay = 3
//          bonus = 300

//     }

//     if (empDetails.Exp > 5) {
//          reward = 5000

//     }

//     let hike = (empDetails.salary * variablePay / 100) + bonus + reward
//     let hikePertage = (hike / empDetails.salary) * 100
//     result.set(empDetails.empname, hikePertage)

// }
// console.log(result)


// let dress : string[]=["tshrit","pant","duppatta","sudi","shirt"]
// let reversed:string[]=[]

// for(let i=dress.length-1;i>=0;i--){
//     console.log(dress[i])
//    // reversed.push(dress[i]!)
//    reversed[i]=reversed[i]+dress[i]!
// }
// console.log(dress)
// console.log(reversed)
// console.log(dress.reverse())
// dress.pop()
// console.log(dress)
// dress.push("leggins")
// console.log(dress)
// dress.unshift("saree")
// console.log(dress)
// dress.shift()
// console.log(dress)


// let word: string="Happy Birthday"
// let reword:string=""
// console.log(word.length)
// for(let i=word.length;i>=0;i--)
// {
//    console.log(word.charAt(i))
//reword=reword+word.charAt(i)
// }
// //console.log(reword)

// let numbers : number[]=[70,45,60,10]
// let largest:number=numbers[0]!

// for(let i=i;i<=numbers.length-1;i++){
//     if(numbers[i]!>largest){
//      largest=numbers[i]!
//     }
// }
// console.log(largest)

let numbers: number[]=[80,90,30,60,100]
numbers.sort((a,b)=>b-a)
console.log(numbers)

console.log(`The second largest number is: ${numbers[1]}`)