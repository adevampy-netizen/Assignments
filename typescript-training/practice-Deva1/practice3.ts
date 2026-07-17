let prime: boolean = true
// let n = 5

for (let i = 1; i <= 10; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            // prime = false
            console.log(`number ${i} is not prime`)
            break
        } else {
            console.log(`number ${i} is prime`)
            break
        }

    }
}


