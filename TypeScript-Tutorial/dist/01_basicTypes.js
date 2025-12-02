//문자형
const a = '';
const b = "";
const c = ``;
let myName = "steve";
let message = `hello, ${myName}`;
myName.toLocaleUpperCase();
// message = 123
let n = 100;
// n = "100"
// n.toUpperCase()
//숫자형
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
//Boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (!isCompleted) {
    console.log("job not complete");
}
//&& || !
let isAvailable = isOpen && !isCompleted;
//null
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("Joey");
logout();
//any
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
export {};
