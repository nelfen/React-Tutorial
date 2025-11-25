type ApiStatus = "active" | "inactive" | 404 | 500;

let currentStatus: ApiStatus = "active";
let errorCode: ApiStatus = 404;

console.log(`현재 상태: ${currentStatus}, 에러 코드: ${errorCode}`);