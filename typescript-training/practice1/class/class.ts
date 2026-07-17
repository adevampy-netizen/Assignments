class Emp{
    static name : string = 'Deva'
    empId : number = 345234
    project : string ='mcd'

    projectDetails(){
        console.log(Emp.name)
        console.log(this.empId)
        console.log(this.project)  
    }

}

let obj = new Emp()
console.log(Emp.name)
obj.projectDetails()

class project extends Emp{
    billable:boolean= true

}

let objc=new project()
console.log(objc.billable)
console.log(objc.empId)