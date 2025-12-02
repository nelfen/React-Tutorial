const appElement = document.getElementById("app");
if (appElement) {
    appElement.innerHTML = "타입 단언을 통해 DOM 접근!";
}
let unknownValue = "TypeScript World";
const lengthOfString = unknownValue.length;
console.log(`단언 후 길이: ${lengthOfString}`);
export {};
