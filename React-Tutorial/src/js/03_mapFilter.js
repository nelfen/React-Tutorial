const fruits = [
  { name:"딸기", color:"빨강", 크기:2 },
];

console.log(
  fruits.map((fruit) => {
    return fruit.name
  })
);

console.log(
  fruits.map((fruit) => `${fruit.name} 주스`)
);

console.log(
  fruits.filter((fruit) => fruit.color === "빨강")
);

console.log(
  fruits.filter((fruit) => fruit.크기 >= 3)
);

console.log(
  fruits.filter((fruit) => fruit.color === "빨강" && fruit.크기 >= 3).map((fruit) => fruit.name)
);