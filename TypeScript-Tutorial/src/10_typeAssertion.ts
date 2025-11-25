const appElement = document.getElementById("app") as HTMLDivElement;

if (appElement) {
    appElement.innerHTML = "타입 단언을 통해 DOM 접근!";
}

let unknownValue: unknown = "TypeScript World";


const lengthOfString = (unknownValue as string).length;
console.log(`단언 후 길이: ${lengthOfString}`);