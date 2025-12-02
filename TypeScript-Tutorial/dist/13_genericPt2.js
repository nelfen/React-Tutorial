function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: "홍길동" }, { age: 30 });
console.log(mergedObj.name);
function countAndDescribe(element) {
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
function getValue(obj, key) {
    return obj[key];
}
const person = { name: "김철수", age: 25 };
console.log(getValue(person, "name"));
export {};
// console.log(getValue(person, "address"));
