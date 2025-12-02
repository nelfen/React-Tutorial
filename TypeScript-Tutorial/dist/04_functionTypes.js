function add(a, b) {
    return a + b;
}
let greeting;
greeting = (msg) => {
    return `Hello, ${msg}`;
};
function logMessage(message) {
    console.log(`LOG: ${message}`);
}
console.log(`Add result: ${add(5, 10)}`);
console.log(`Greeting: ${greeting("TypeScript")}`);
logMessage("함수 타입 확인 완료");
export {};
