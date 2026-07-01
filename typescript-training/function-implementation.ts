//Function : Block of code or a collection of statements written together to complete a specific task. 

//There are multiple ways we can implement the functions in TypeScript. 

//1. Function without parameters and without return type 
//2. Function with parameters and without return type 
//3. Function with parameters and with return type 
//4. Function without parameters and with return type 
//5. Function with optional parameters. 
//6. Function with default parameters 
//7. Function with rest Parameters 

//1. Function without parameters and without return type 
function login(): void {
    console.log("lauch the chrome browser")
    console.log("Enter the URL: www.amazon.com ");
    console.log("Enter username as Bharath and password as Bharath123. ");
    console.log("Click on the Login button. ");
}

// login()

//2. Function with parameters and without return type 
function loginWithPara(username: string, password: string): void {
    console.log("lauch the chrome browser")
    console.log("Enter the URL: www.amazon.com ");
    console.log(`Enter the ${username} and ${password}`)
    console.log("click login button")
}

// loginwithpara('deva','deva123')

//3. Function with parameters and with return type 

function loginwithParaReturn(username: string, password: string): string {
    console.log("lauch the chrome browser")
    console.log("Enter the URL: www.amazon.com ");
    console.log(`Enter the ${username} and ${password}`)
    console.log("click login button")
    return "login success"
}

// loginwithParaReturn('logi','logi123')
// console.log(loginwithParaReturn('logi', 'logi123'))

//4. Function without parameters and with return type 

function withoutParaReturn(): string {
    console.log("testing")
    return "testing done"
}

console.log(withoutParaReturn())