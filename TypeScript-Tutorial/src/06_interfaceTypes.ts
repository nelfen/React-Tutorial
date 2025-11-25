interface Product {
    name: string;
    price: number;
    description?: string;
}

const laptop: Product = {
    name: "MacBook Pro",
    price: 2500000,
    description: "고성능 노트북"
};

const keyboard: Product = {
    name: "기계식 키보드",
    price: 150000
};

console.log(`제품 이름: ${laptop.name}, 가격: ${keyboard.price}`);