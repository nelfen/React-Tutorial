function getLastElement<T>(arr: T[]): T | undefined { 
    if (arr.length === 0) {
        return undefined;
    }
    
    return arr[arr.length - 1];
}


//숫자형
const numberArray = [10, 20, 30];
const lastNumber = getLastElement(numberArray); 
console.log(`마지막 숫자: ${lastNumber}`); 

if (lastNumber !== undefined) {
    console.log(`+1 결과: ${lastNumber + 1}`); 
}


//문자형
const stringArray = ["사과", "바나나", "포도"];
const lastFruit = getLastElement(stringArray);
console.log(`마지막 과일: ${lastFruit}`); 

if (lastFruit) {
    console.log(`대문자 변환: ${lastFruit.toUpperCase()}`);
}


//빈배열
const emptyArray: string[] = [];
const lastEmpty = getLastElement(emptyArray);
console.log(`비어있는 배열 결과: ${lastEmpty}`);