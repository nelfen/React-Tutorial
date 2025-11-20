//문자형
const a: string = ''
const b: string = ""
const c: string = ``

let myName: string = "steve";
let message: string = `hello, ${myName}`;

myName.toLocaleUpperCase();

// message = 123

let n: number = 100;

// n = "100"
// n.toUpperCase()


//숫자형
let count: number = 10
let price: number = 9.99
let temperature: number = -15 
let distance: number = 3.4e-5

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

//불리언
let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen) {
  console.log("hello we are open!")
}

if(!isCompleted) {
  console.log("job not complete")
}

//&& || !
let isAvailable: boolean = isOpen && !isCompleted;

//null
let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login("Joey")
logout()

//any
let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();