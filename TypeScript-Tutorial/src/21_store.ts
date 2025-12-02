export interface Product {
  name: string;
  price: number;
}

export function showPrice(item: Product) {
  console.log(`🏷️ ${item.name}의 가격은 ${item.price}원입니다.`);
}

export const storeName = "우리동네 마트";