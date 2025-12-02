import { type Product, showPrice, storeName } from "./21_store";

console.log(`환영합니다! 여기는 ${storeName}입니다.`);

const myItem: Product = {
  name: "맛있는 사과",
  price: 2000
};

showPrice(myItem);