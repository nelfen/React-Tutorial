let city = "Seoul"; //재할당 가능
const country = "Korea";  //재할당 불가능

const user = {
  name: "홍길동",
  age: 30
};
user.age = 31;  //내용은 변경 가능


//as const
const book = {
  title: "타입스크립트 정복",
  price: 20000
} as const;

// book.price = 10000;
// book.title = "자바스크립트";


//Tuple
const colors = ["red", "green", "blue"] as const;

// colors.push("yellow");
// colors[0] = "pink";


//Literal Type
const Config = {
  theme: "dark",      // 타입: "dark"
  language: "ko",     // 타입: "ko"
  version: "1.0.0"
} as const;

function setTheme(theme: "dark" | "light") {
  console.log(`테마 변경: ${theme}`);
}

setTheme(Config.theme); 