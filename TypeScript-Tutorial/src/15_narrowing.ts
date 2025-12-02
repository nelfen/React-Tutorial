//typeof
function combine(input: number | string) {
  if (typeof input === "number") {
    return input.toFixed(2);
  } else {
    return input.toUpperCase();
  }
}

console.log(combine(10.123));
console.log(combine("hello"));


//in
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  } else {
    return animal.fly();
  }
}


//instanceof
function printDate(date: Date | string) {
  if (date instanceof Date) {
    console.log("Date 객체입니다:", date.toISOString());
  } else {
    console.log("문자열입니다:", date);
  }
}

printDate(new Date());
printDate("2025-05-05");