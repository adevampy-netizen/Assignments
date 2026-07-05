// prime check

let num: number = 9
let isprime: boolean = true

if(num <=1){
    isprime = false
    console.log(`given number ${num} prime check is ${isprime}`);

}else{
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isprime = false
            console.log(`given number ${num} prime check is ${isprime}`)
            break
        }
    }

}

if(isprime){
    console.log(`given number ${num} prime check is ${isprime}`)
}

 



