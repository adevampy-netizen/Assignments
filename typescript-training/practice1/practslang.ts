// function day(num:number): void{
// switch (num){
// case 1:
//     console.log("Today is sunday");
//     break;
// case 2:
//     console.log("Today is monday");
//     break;
// case 3:
//     console.log("Today is tuesday");
//     break;
// case 4 :
//     console.log("Today is wednesday");
//     break;
// case 5 :
//     console.log("Today is thursday");
//     break;
// case 6 :
//     console.log("Today is friday");
//     break;
// case 7 :
//     console.log("Today is saturday");
//     break;
// default :
//     console.log("Invalid day")
// }
// }


// day(3)
function maxProfit(stockPrice: number[]): number {

    let lowestPrice = stockPrice[0]
    let maxProfit = 0


    for (let i = 1; i < stockPrice.length; i++) {
        if (stockPrice[i]! < lowestPrice!) {
            lowestPrice = stockPrice[i]

        } else {
            let price = stockPrice[i]! - lowestPrice!
            maxProfit = Math.max(maxProfit, price)
        }
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))


