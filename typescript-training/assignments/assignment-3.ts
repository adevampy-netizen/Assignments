let studentName: string [] = ['suresh', 'mahesh', 'naresh'];
let studentMarks: number[] = [75, 85, 82];
let updatedMarks: number[] = [];
let avgMarks: number
// let temp : number = 0
let sumofmarks: number = 0

// for(let mark of studentMarks){
//     mark
// }


for (let i =0; i<studentMarks.length; i++){
     updatedMarks[i] = studentMarks[i]! + 10; // u + = s[i]
     
}


for (let i = 0; i<updatedMarks.length;i++){
    sumofmarks = updatedMarks[i] !+ sumofmarks
}

console.log(sumofmarks)
console.log(`updated marks = ${updatedMarks}`);
console.log(`average = ${sumofmarks/updatedMarks.length}`)

for (let i =0; i<updatedMarks.length; i++){
    console.log(`${studentName[i]} : ${updatedMarks[i]}`)
}