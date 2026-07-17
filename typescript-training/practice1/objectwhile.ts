// let i:number = 0
// do{
// console.log("print now")
// i++
// }while(i>0)

interface stockDetdata {
    "name": string,
    "Quantity": number,
    "working": boolean,
    "broken": boolean

}

let stockDetails: stockDetdata[] = [
    {
        "name": "clock",
        Quantity: 5,
        "working": true,
        "broken": false
    },
    {
        "name": "fridge",
        Quantity: 1,
        "working": true,
        "broken": true

    },
    {
        "name": "washing",
        Quantity: 7,
        "working": false,
        "broken": false
    }
]
// let ques = "name"
// // console.log(stockDetails.name)
// // console.log(stockDetails["name"])
// console.log(stockDetails[ques as keyof stockDetdata])
// console.log(ques)

// for (let stocks of stockDetails) {
//     console.log(stocks)

// }


for (let stocks of stockDetails) {
    console.log(stocks.name)
    // if (stocks.Quantity <= 1) {
    //     console.log(`restock the item ${stocks.name}`)
    // }
}
// console.log(stockDetails[0])
stockDetails[0]!.name = "light"

console.log(stockDetails[0])

