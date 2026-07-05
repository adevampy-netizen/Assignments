// let bankTransaction: number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000]
// console.log(`Total number of transaction completed is ${bankTransaction.length}`)

// let creditAmt:number[] = []
// let debitAmt:number[]=[]
// let c:number
// let d:number

// for(let i=0;i<bankTransaction.length;i++)
// {
//   if(bankTransaction[i]>0){
//     // bankTransaction[i]=debitAmt[i]
//     // console.log(debitAmt[i])
//     creditAmt[i] = bankTransaction[i]
//     // console.log(creditAmt[c])

//   }
//   else{
//     // bankTransaction[i]=creditAmt[i]
//     // console.log(creditAmt[i])
//     debitAmt[i] = bankTransaction[i]
//     // console.log(debitAmt[d])
//   }
// }

let bankTransaction: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000]
// console.log(`Total number of transaction completed is ${bankTransaction.length}`)
let creditAmt: number[] = []
let debitAmt: number[] = []
let suspiciousCount: number = 0
let neg_suspiciousCount: number = 0
let c_index = 0
let d_index = 0


for (let i = 0; i < bankTransaction.length; i++) {

    if (bankTransaction[i] > 0) {
        creditAmt[c_index] = bankTransaction[i]
        c_index = c_index + 1
        if (bankTransaction[i] > 10000) {
            suspiciousCount = suspiciousCount + 1
        }
    } else if (bankTransaction[i] < 0) {
        debitAmt[d_index] = bankTransaction[i]
        d_index = d_index + 1
        if (bankTransaction[i] < -10000)
            neg_suspiciousCount = neg_suspiciousCount + 1
    }
}

console.log(`No of credit amount: ${creditAmt}`)
console.log(`No of debit amount: ${debitAmt}`)
console.log(`totoal transcations: ${bankTransaction.length}`)
console.log(`suspicious transcations: ${suspiciousCount}`)
console.log(`neg_suspicious transcations: ${neg_suspiciousCount}`)

