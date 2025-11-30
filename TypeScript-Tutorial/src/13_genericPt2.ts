function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge({ name: "홍길동" }, { age: 30 });
console.log(mergedObj.name);


//extends
interface ILengthy {
  length: number;
}

function countAndDescribe<T extends ILengthy>(element: T): string {
  let descriptionText = "값이 없습니다.";
  if (element.length > 0) {
    descriptionText = `값의 개수는 ${element.length}개 입니다.`;
  }
  return descriptionText;
}

console.log(countAndDescribe("안녕하세요"));
console.log(countAndDescribe(["스포츠", "요리"]));
// console.log(countAndDescribe(100));


//keyof
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: "김철수", age: 25 };

console.log(getValue(person, "name"));
// console.log(getValue(person, "address"));