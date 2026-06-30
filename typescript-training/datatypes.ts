
// 1.
// Temperature of a city in degrees Celsius: 25.5
let temp : number = 25.5

console.log(`Temperature of a city in degrees Celsius: ${temp}`)

// 2.
// Whether a customer has placed an order: true or false

let orderPlaced : boolean = true

console.log(`Whether a customer has placed an order: ${orderPlaced}`)

// 3.
// Person's phone number: "123-456-7890"
 
let devaNumber : string = "123-456-7890"

console.log(`Deva phone number: "${devaNumber}"`)


// 4.
// Amount of money in a customer's bank account: 1000.50
let amount : number =  1000.50

console.log(`Amount of money in a customer's bank account: ${amount}`)

// 5.
// Person's email address: "john.doe@example.com"
let emailAddress : string = "john.doe@example.com"
console.log(`Person's email address: "${emailAddress}"`)

// 6.

// Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let latitude : number = 37.7749
let longitude : number = -122.4194

console.log(`Coordinates of a location (latitude, longitude): ${latitude}, {longitude}`)

// 7.
// Person's marital status: true or false
let maritalStatus : boolean = true
console.log(`Person's marital status: ${maritalStatus}`)

// 8.
// Person's occupation: "Software Engineer"
let occupation : string = "Software Engineer"
console.log(`Person's occupation: "${occupation}"`)
// 9.
// Person's favourite colour: "Blue"
let favColor : string = "Blue"
console.log(`Person's favourite colour: "${favColor}"`)

// 10.
// Current year: 2023

// 11.
// Number of followers on a social media platform: 1,000,000
let NoFollowers : string = "1,000,000"
console.log(`Number of followers on a social media platform: "${NoFollowers}"`)

// 12.
// Rating of a movie: 7.5
let rating : number = 7.5
console.log(`Rating of a movie: ${7.5}`)

// 13.
// Person's blood type: 'A'
let bloodType : string = 'A'
console.log(`Person's blood type: '${bloodType}'`)

// 14.
// Title of a book: "To Kill a Mockingbird"
let bookTitle: string = 'To Kill a Mockingbird'
console.log(`Title of a book: "${bookTitle}"`)

// 15.
// Number of employees in a company: 500
let employeeCount : number = 500
console.log(`Number of employees in a company: ${employeeCount}`)

// 16.
// Time of an event: 2:30 PM
let time : string = "2:30 PM"
console.log(`Time of an event: ${time}`)

// 17.
// Name of a country: "United States"
let country : string = "United States"

console.log(`Name of a country: "${country}"`)

// 18.
// Person's eye color: "Brown"
let eyeColor : string = "Brown"
console.log(`Person's eye color: "${eyeColor}"`)

// 19.
// Person's birthplace: "New York City"
let birthPlace : string = "New York City"
console.log(`Person's birthplace: "${birthPlace}"`)

// 20.
// Distance between two cities: 200.5
let distanceOfCities : number = 200.5
console.log(`Distance between two cities: ${distanceOfCities}`)

// data types

interface houseData  {
    "Noofrooms" : string
    "carparkingavailalbe" : boolean
    "Noofkitchen" : number
    "vehiclename" : string
}
let housedetails:houseData = {
    Noofrooms : "five",
    "carparkingavailalbe" : true,
    Noofkitchen : 2,
    "vehiclename" : "wagon R"

}
console.log(housedetails.vehiclename)
console.log(housedetails["Noofrooms"])
console.log(housedetails.Noofkitchen)

let empData : Set <string | number >= new Set()
empData.add(1234)
empData.add("Logi")
console.log(empData)


let empDetails : Map<string | number, (string|number)>= new Map()
empDetails.set('empid',1234)
empDetails.set( 4534,56)
console.log(empDetails)

let aName : string []= ["fruits",'vegitable','dry']
console.log(aName)

let aNameAndNumber: (string | number)[]= ["fruits",'vegitable','dry',200,500]
console.log(aNameAndNumber)

let tName: [string, number,boolean]=["fruits",600,true]
console.log(tName)