let empValues: Map<string, number> = new Map(); //duplicate keys are not allowed in the map.

function hike(name: string, salary: number, exp: number, rating: number): void {
    let bonus: number = 0
    let varPay: number = 0
    
    if (rating >= 4) {
        bonus  = 1500
        varPay = 15
        // let hike1 = (salary * (varPay / 100)) + bonus
        // if (exp >= 5) {
        //     hike1 = hike1 + 5000
        // }
        // let hikePercentage = hike1 / salary
        // empValues.set(name, hikePercentage)

    }
    else if (rating >= 3 && rating < 4) {
        bonus= 1200
        varPay = 10
        // let hike1 = (salary * (varPay / 100)) + bonus
        // if (exp >= 5) {
        //     hike1 = hike1 + 5000
        // }
        // let hikePercentage = hike1 / salary
        // empValues.set(name, hikePercentage)
    }
    else {
        bonus = 300
        varPay = 3
        // let hike1 = (salary * (varPay / 100)) + bonus
        // if (exp >= 5) {
        //     hike1 = hike1 + 5000
        // }
        // empValues.set(name, hike1)
    }    
        
    let hike1 = (salary * (varPay / 100)) + bonus
    if (exp >= 5) {
    hike1 = hike1 + 5000
    }
    let hikePercentage = (hike1 / salary) * 100
    empValues.set(name, hikePercentage)      
        
}

hike('Alice', 75000, 5.1, 4.2)
hike('smith',68000, 3.2, 3.8)
hike('Davis', 82000, 7.1, 4.5)
hike('David', 90000, 10.2, 2.5)
hike('Green', 60000, 2.4, 3.5)
console.log(empValues)