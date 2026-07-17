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


