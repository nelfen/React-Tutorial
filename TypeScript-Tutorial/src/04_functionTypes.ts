function add(a: number, b: number): number {
    return a + b;
}

let greeting: (message: string) => string;

greeting = (msg) => {
    return `Hello, ${msg}`;
};


function logMessage(message: string): void {
    console.log(`LOG: ${message}`);
}

console.log(`Add result: ${add(5, 10)}`);
console.log(`Greeting: ${greeting("TypeScript")}`);
logMessage("함수 타입 확인 완료");